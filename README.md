# 🩺 UrticaScan AI – Dermatographia Urticaria Detection System

UrticaScan AI is an AI-powered web application that detects **Dermatographia Urticaria**, a rare skin condition, using deep learning. The system classifies uploaded skin images, segments affected regions, and provides a downloadable report and treatment suggestions.

---

## 📖 What is Dermatographia?

**Dermatographia**, also known as *skin writing*, is a form of physical urticaria where light scratching leads to red, raised welts or hives. It affects about 2–5% of people globally and may be triggered by stress, infections, allergens, or unknown causes.

This project aims to provide an AI-based early screening tool to help individuals and dermatologists identify and monitor symptoms efficiently.

---

## 🧬 Classes of Skin Disease Detected

The system classifies skin conditions into:

- ✅ **Normal Skin** – No noticeable reaction or inflammation.
- ⚠️ **Mild Dermatographia** – Temporary raised lines, often fade quickly.
- ❗ **Severe Dermatographia** – Persistent welts or strong inflammatory reaction to pressure.

The segmentation module pinpoints affected areas to visually assist diagnosis.

---

## 🚀 Key Features

- 📸 Upload skin images for analysis
- 🤖 AI classification using CNN (PyTorch)
- 🧠 Skin region segmentation using U-Net (Keras)
- 🖍️ Contour overlay on affected areas using OpenCV
- 📄 PDF report generation of predictions and findings
- 📧 Email delivery of the result
- 💡 Basic treatment suggestions based on severity
- ⚙️ Modern, mobile-friendly frontend UI

---

## 🖼️ Frontend Screenshots

| Home Page | Upload & Predict | Result Page |
|-----------|------------------|-------------|
| ![Home](screenshots/home.png) | ![Upload](screenshots/upload.png) | ![Result](screenshots/result.png) |

---

## 🛠️ Tech Stack Used

### 👨‍💻 Frontend
- ReactJS
- Tailwind CSS
- Axios
- File Input Preview
- Toast Notifications

### 🧪 Backend
- FastAPI (Python)
- Pydantic
- OpenCV
- ReportLab (PDF)
- smtplib (email)
- Uvicorn (ASGI server)

---

## 🧠 AI Models and Architecture

### 🔹 Classification Model
- Framework: **PyTorch**
- Type: Custom CNN
- Task: Classify input image as Normal / Mild / Severe dermatographia

### 🔹 Segmentation Model
- Framework: **TensorFlow / Keras**
- Architecture: U-Net
- Task: Segment the inflamed areas of the skin

---

## 🏗️ System Architecture

```mermaid
graph TD
A[User Uploads Image] --> B[Frontend (React)]
B --> C[API Request to FastAPI Backend]
C --> D[Classification Model (PyTorch)]
C --> E[Segmentation Model (Keras)]
D --> F[Classification Result]
E --> G[Segmentation Mask]
F & G --> H[OpenCV Contour + Final Output]
H --> I[PDF Generation + Email Sending]
I --> J[Return Results to User]
