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
- 💡 Basic treatment suggestions based on severity
- ⚙️ Modern, mobile-friendly frontend UI

---

## 🖼️ Frontend Screenshots

| Home Page | Upload & Predict | Result Page |
|-----------|------------------|-------------|
| ![Home](https://github.com/user-attachments/assets/814c6938-2c40-4c1b-aaa1-7989e2f42752) | ![Upload]![predict](https://github.com/user-attachments/assets/92bf97c9-d53a-425c-a7f3-fa47de715294)| ![Result]![predict2](https://github.com/user-attachments/assets/01594b17-7c61-4697-bf45-73ea4238976a)
|

---

## 🛠️ Tech Stack Used

### 👨‍💻 Frontend
- ReactJS
- Tailwind CSS

### 🧪 Backend
- FastAPI (Python)
- Tensorflow
- Pytorch
- OpenCV
- Uvicorn(FastAPI)
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
![resunet](https://github.com/user-attachments/assets/cf9fe087-fa7c-4521-b8d1-e2216cab3659)

