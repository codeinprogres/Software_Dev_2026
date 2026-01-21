from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
import cv2
import numpy as np
import io
from PIL import Image

app = FastAPI()

# IMPORTANT: This allows your React frontend to talk to this Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your custom model (Change 'best.pt' to your preferred model file)
model = YOLO("models/best.pt")

@app.get("/")
def home():
    return {"status": "Backend is running"}

@app.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):
    # 1. Read the uploaded image
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    img_array = np.array(image)

    # 2. Run YOLO Inference
    results = model(img_array)

    detections = []
    for result in results:
        for box in result.boxes:
            x1, y1, x2, y2 = box.xyxy[0].tolist() # Coordinates
            conf = float(box.conf[0])             # Confidence
            cls = int(box.cls[0])                 # Class ID
            label = model.names[cls]              # Class Name (e.g., "price-tag")

            detections.append({
                "label": label,
                "confidence": round(conf, 2),
                "box": [int(x1), int(y1), int(x2), int(y2)]
            })

    return {"detections": detections}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)