from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests

load_dotenv()
app = Flask(__name__)

# 🔥 FIX: Allow specific origin with credentials and all methods
CORS(app, supports_credentials=True, resources={r"/*": {
    "origins": "http://localhost:5173",
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

# HuggingFace setup...
API_KEY = os.getenv("FARMAI_API_KEY")
API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

def query_huggingface(payload):
    response = requests.post(API_URL, headers=HEADERS, json=payload)
    return response.json()

@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return '', 200  # Preflight request handled

    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"response": "Invalid input"}), 400

    payload = {
        "inputs": user_message,
        "parameters": {
            "max_new_tokens": 200,
            "temperature": 0.7,
            "top_p": 0.9
        }
    }

    response = query_huggingface(payload)

    if isinstance(response, list) and "generated_text" in response[0]:
        return jsonify({"response": response[0]["generated_text"]})
    else:
        return jsonify({"response": "Sorry, I couldn't process that."})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
