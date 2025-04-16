from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the trained model and label encoder
model = joblib.load(open('./crop_predictor_model.pkl', 'rb'))
encoder = joblib.load(open('./crop_label_encoder.pkl', 'rb'))  # <-- Load encoder

@app.route('/predict', methods=['POST'])
def predict_crop():
    try:
        data = request.json
        temperature = float(data['temperature'])
        humidity = float(data['humidity'])
        ph = float(data['ph'])
        rainfall = float(data['rainfall'])

        # Prepare input for prediction
        features = np.array([[temperature, humidity, ph, rainfall]])
        prediction = model.predict(features)

        # Decode predicted label
        crop_name = encoder.inverse_transform(prediction)[0]

        return jsonify({"crop": crop_name})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)
