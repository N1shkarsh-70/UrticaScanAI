# UrticaScan AI – Dermatographia Urticaria Detection System

UrticaScan AI is an AI-powered web application that detects **Dermatographia Urticaria**, a rare skin condition, using deep learning. The system classifies uploaded skin images, segments affected regions, and provides a downloadable report and treatment suggestions.

---

## What is Dermatographia?

**Dermatographia**, also known as *skin writing*, is a form of physical urticaria where light scratching leads to red, raised welts or hives. It affects about 2–5% of people globally and may be triggered by stress, infections, allergens, or unknown causes.

This project aims to provide an AI-based early screening tool to help individuals and dermatologists identify and monitor symptoms efficiently.

![Screenshot 2025-06-18 230526](https://github.com/user-attachments/assets/3c18067a-1271-4e65-9cc2-f3acd96f2a93)


---

## Classes of Skin Disease Detected

The system classifies skin conditions into:

- **Normal Skin** – No noticeable reaction or inflammation.
- **Mild Dermatographia** – Temporary raised lines, often fade quickly.
- **Severe Dermatographia** – Persistent welts or strong inflammatory reaction to pressure.

The segmentation module pinpoints affected areas to visually assist diagnosis.

---

##  Key Features

- Upload skin images for analysis
- AI classification using CNN (PyTorch)
- Skin region segmentation using U-Net (Keras)
- Contour overlay on affected areas using OpenCV
- Basic treatment suggestions based on severity
- Modern, mobile-friendly frontend UI

---

## Frontend Screenshots

Home Page
![Home](https://github.com/user-attachments/assets/814c6938-2c40-4c1b-aaa1-7989e2f42752) 

Upload & Predict
![Upload](https://github.com/user-attachments/assets/92bf97c9-d53a-425c-a7f3-fa47de715294)

Result Page
![Result](https://github.com/user-attachments/assets/01594b17-7c61-4697-bf45-73ea4238976a)


---

## Tech Stack Used

### Frontend
- ReactJS
- Tailwind CSS

### Backend
- FastAPI (Python)
- Tensorflow
- Pytorch
- OpenCV
- Uvicorn(FastAPI)
---

## AI Models and Architecture

### 🔹 Classification Model
- Framework: **PyTorch**
- Model:ResNet50
- Type: Custom CNN
- Task: Classify input image as Normal / Mild / Severe dermatographia

### 🔹 Segmentation Model
- Framework: **TensorFlow / Keras**
- Model: Resnet Encoder+U-Net
- Task: Segment the inflamed areas of the skin

---

## System Architecture


![resunet](https://github.com/user-attachments/assets/cf9fe087-fa7c-4521-b8d1-e2216cab3659)


## Team & Contributors
| Ankit Kumar Gola | [@Ankit](https://github.com/AkshrajKumar)


## Disclaimer
⚠️ This application is a pre-diagnostic tool and is not a replacement for professional medical advice. Always consult a dermatologist for clinical evaluation and treatment.


## Contributions
Contributions, suggestions, and improvements are welcome!
If you'd like to contribute, please follow these steps:
- Fork the repository.
- Create a new branch for your feature/bug fix.
- Make your changes and test thoroughly.
- Submit a pull request explaining your changes and the problem they solve.



