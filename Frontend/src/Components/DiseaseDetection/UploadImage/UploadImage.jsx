import React, { useState } from 'react';
import axios from 'axios';
import './UploadImage.css';

const UploadImage = ({ onResult }) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageFile(file);
    }
  };

  // Handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageFile(file);
    }
  };

  // Prevent default drag-over behavior
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Remove uploaded image (Reset)
  const handleCancel = () => {
    setImage(null);
    setImageFile(null);
  };

  // Upload and analyze image
  const handleUpload = async () => {
    if (!imageFile) {
      alert("Please select an image!");
      return;
    }

    setLoading(true); // Show loading indicator

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post("https://plantdiseasedetection-p3cg.onrender.com/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });     

      // Pass the result to parent component (DiseaseDetection.jsx)
      onResult({
        image,  // Include the uploaded image preview
        ...response.data // Include API response
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to classify the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dd-container" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="upload-files">
        <div className="upload-desc">
          <h1>Drag & Drop Image Here</h1>
          <p>or click to select an image</p>
        </div>

        {/* File upload box */}
        {!image && (
          <div className="file-1">
            <label className="file">
              <input type="file" accept="image/*" onChange={handleFileChange} hidden />
              <div className="file-front"></div>
              <div className="file-ext"></div>
              <div className="file-back"></div>
            </label>
          </div>
        )}

        {/* Show image preview & buttons */}
        {image && (
          <div className="image-preview">
            <img src={image} className="uploaded-image" />
            <div className="button-container">
              <button className="detect-btn" onClick={handleUpload} disabled={loading}>
                {loading ? <span className="spinner"></span> : "✔ Detect"}
              </button>
              <button className="cancel-btn" onClick={handleCancel}>✖ Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
