from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()
app = Flask(__name__)

# Enable CORS with specific configurations
CORS(app, supports_credentials=True, resources={r"/*": {
    "origins": "http://localhost:5173",
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

# HuggingFace setup...
API_KEY = os.getenv("HUGGINGFACE_API_KEY")
API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

def query_huggingface(payload):
    try:
        # Send a POST request to Hugging Face API
        response = requests.post(API_URL, headers=HEADERS, json=payload)

        # Check if the response status code indicates success (200)
        if response.status_code != 200:
            print(f"Error with Hugging Face API: {response.status_code} - {response.text}")
            return {"error": "Failed to connect to Hugging Face API"}

        # Return the response JSON
        return response.json()
    except Exception as e:
        print(f"Exception occurred: {str(e)}")
        return {"error": "An error occurred while communicating with Hugging Face"}

@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return '', 200  # Handle preflight request

    # Get the user message from the request
    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"response": "Invalid input"}), 400

    # Prepare payload for Hugging Face API
    payload = {
        "inputs": user_message,
        "parameters": {
            "max_new_tokens": 200,
            "temperature": 0.7,
            "top_p": 0.9
        }
    }

    # Query Hugging Face API
    response = query_huggingface(payload)

    # Log the raw response from Hugging Face for debugging
    print("Hugging Face Response:", response)

    # Check if the response contains generated_text
    if isinstance(response, list) and "generated_text" in response[0]:
        return jsonify({"response": response[0]["generated_text"]})
    elif "error" in response:
        return jsonify({"response": response["error"]}), 500
    else:
        return jsonify({"response": "Sorry, I couldn't process that."})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
