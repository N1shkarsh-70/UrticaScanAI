import io
import os
import base64
import numpy as np
import cv2
import pandas as pd
import gdown
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import torch
import torch.nn as nn
from torchvision import models, transforms
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Google Drive File IDs ---
CLASSIFICATION_FILE_ID = "11DOwmV24ySL62JCoceeenYf2pdhnNjxO"
SEGMENTATION_FILE_ID = "1xtF6FxfGdNkJVXMebXU2NYaig5hLwVr6"

# --- Paths ---
CLASSIFICATION_MODEL_PATH = 'ClassificationD.pth'
SEGMENTATION_MODEL_PATH = 'Segmentation.keras'
TREATMENT_CSV_PATH = 'stages.csv'

IMG_HEIGHT, IMG_WIDTH = 256, 256

CLASS_NAMES = [
    "Dermatographia",
    "Eczema",
    "Psoriasis pictures Lichen Planus and related diseases",
    "Tinea Ringworm Candidiasis and other Fungal Infections",
    "Warts Molluscum and other Viral Infections"
]

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# --- Download from Google Drive ---
def download_from_drive(file_id, output_path):
    if not os.path.exists(output_path):
        url = f"https://drive.google.com/uc?id={file_id}"
        print(f"Downloading {output_path} from Google Drive...")
        gdown.download(url, output_path, quiet=False)
        print(f"Downloaded {output_path}.")

# --- Load Models & Resources ---
@app.on_event("startup")
def load_resources():
    download_from_drive(CLASSIFICATION_FILE_ID, CLASSIFICATION_MODEL_PATH)
    download_from_drive(SEGMENTATION_FILE_ID, SEGMENTATION_MODEL_PATH)

    global classification_model, segmentation_model, treatment_df

    model = models.resnet50(pretrained=False)
    for name, param in model.named_parameters():
        param.requires_grad = ("layer4" in name or "fc" in name)
    model.fc = nn.Linear(model.fc.in_features, len(CLASS_NAMES))
    model.load_state_dict(torch.load(CLASSIFICATION_MODEL_PATH, map_location=DEVICE))
    model.to(DEVICE)
    model.eval()
    classification_model = model

    segmentation_model = load_model(SEGMENTATION_MODEL_PATH, compile=False)
    treatment_df = pd.read_csv(TREATMENT_CSV_PATH)

# --- Utility Functions ---
def preprocess_image_torch(image: Image.Image):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406],
                             std=[0.229, 0.224, 0.225])
    ])
    return transform(image).unsqueeze(0).to(DEVICE)

def classify_image(image: Image.Image):
    input_tensor = preprocess_image_torch(image)
    with torch.no_grad():
        outputs = classification_model(input_tensor)
        probs = torch.softmax(outputs, dim=1).squeeze().cpu().numpy()
        pred_idx = np.argmax(probs)
        return CLASS_NAMES[pred_idx], float(probs[pred_idx]) * 100

def preprocess_for_segmentation(image: Image.Image):
    resized = image.resize((IMG_WIDTH, IMG_HEIGHT))
    arr = img_to_array(resized) / 255.0
    return np.expand_dims(arr, 0), np.array(image)

def apply_opencv_segmentation(image_np):
    gray = cv2.cvtColor(image_np, cv2.COLOR_RGB2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    _, binary = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return binary // 255

def find_best_threshold_single(pred):
    thresholds = np.arange(0.3, 0.9, 0.05)
    best_thresh, best_score = 0.5, -np.inf
    for thresh in thresholds:
        binary = (pred > thresh).astype(np.uint8).squeeze()
        edges = cv2.Canny((binary * 255).astype(np.uint8), 100, 200)
        score = edges.sum() * 0.4 + binary.sum() * 0.4 + np.var(binary) * 0.2
        if score > best_score:
            best_thresh, best_score = thresh, score
    return best_thresh

def overlay_contours_on_image(original, mask):
    mask_resized = cv2.resize(mask.squeeze(), original.shape[:2][::-1], interpolation=cv2.INTER_NEAREST)
    contours, _ = cv2.findContours(mask_resized.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    overlay = original.copy()
    cv2.drawContours(overlay, contours, -1, (0, 255, 0), thickness=2)
    return overlay

def encode_image_to_base64(img_array):
    pil_img = Image.fromarray(img_array)
    buffered = io.BytesIO()
    pil_img.save(buffered, format="PNG")
    return base64.b64encode(buffered.getvalue()).decode()

def calculate_area_percentage(mask):
    total_pixels = mask.size
    affected_pixels = np.sum(mask > 0)
    return (affected_pixels / total_pixels) * 100

def determine_stage(area_percent):
    if area_percent < 5:
        return "Mild"
    elif area_percent < 20:
        return "Moderate"
    else:
        return "Severe"

def get_treatment(disease, stage):
    disease = disease.lower()
    stage = stage.capitalize()
    df_filtered = treatment_df[
        (treatment_df['Disease'].str.lower() == disease) & (treatment_df['Stage'] == stage)
    ]
    if df_filtered.empty:
        return ["No treatment information available."]
    treatments = df_filtered['Treatment'].values[0]
    return [t.strip() + '.' for t in treatments.split('. ') if t.strip()]

# --- API Endpoint ---
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')

    predicted_class, confidence = classify_image(image)
    predicted_class_lower = predicted_class.lower()
    original_np = np.array(image)

    if predicted_class_lower == "dermatographia":
        preprocessed_seg, _ = preprocess_for_segmentation(image)
        pred_mask = segmentation_model.predict(preprocessed_seg)[0]
        best_thresh = find_best_threshold_single(pred_mask)
        binary_mask = (pred_mask > best_thresh).astype(np.uint8).squeeze()
    else:
        binary_mask = apply_opencv_segmentation(original_np)
        best_thresh = None

    overlay_img = overlay_contours_on_image(original_np, binary_mask)
    mask_resized = cv2.resize(binary_mask, original_np.shape[:2][::-1], interpolation=cv2.INTER_NEAREST)
    area_percent = calculate_area_percentage(mask_resized)
    stage = determine_stage(area_percent)
    treatments = get_treatment(predicted_class_lower, stage)

    mask_b64 = encode_image_to_base64((mask_resized * 255).astype(np.uint8))
    overlay_b64 = encode_image_to_base64(overlay_img)

    return {
        "predicted_class": predicted_class,
        "confidence": confidence,
        "threshold": best_thresh,
        "affected_area_percent": area_percent,
        "stage": stage,
        "treatments": treatments,
        "segmentation_mask_base64": mask_b64,
        "overlay_image_base64": overlay_b64,
    }
