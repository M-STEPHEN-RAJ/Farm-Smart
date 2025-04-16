from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from PIL import Image
import io

app = Flask(__name__)

# 🔥 FIX: Allow specific origin with credentials and all methods
CORS(app, supports_credentials=True, resources={r"/*": {
    "origins": "http://localhost:5173",
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

# Load the Hugging Face model
try:
    pipe = pipeline("image-classification", model="SanketJadhav/PlantDiseaseClassifier-Resnet50")
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ Model loading failed: {e}")

@app.route("/predict", methods=["POST"])
def classify_plant_disease():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']
        image = Image.open(io.BytesIO(file.read()))

        # Perform classification
        result = pipe(image)
        label = result[0]['label']  # e.g. "Potato___healthy" or "Apple___Apple_scab"

        # Split and clean the label
        parts = label.split("___")
        plant_name = parts[0]
        disease = parts[1] if len(parts) > 1 else "Unknown"
        disease_clean = disease.replace(plant_name, "").replace("_", " ").strip().lower()
        disease_clean = "healthy" if "healthy" in disease.lower() else disease_clean

        return jsonify({
            "plant_name": plant_name,
            "status": "Healthy" if "healthy" in disease.lower() else "Unhealthy",
            "disease": f"{plant_name} - {disease_clean}",
            "accuracy": round(result[0]['score'] * 100, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))  # Use the port from Render
    app.run(debug=True, host="0.0.0.0", port=port)

