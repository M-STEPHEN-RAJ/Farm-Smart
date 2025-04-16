import React from 'react';
import './DisplayResult.css';
import back from '../../../assets/arrow_left.svg';

const DisplayResult = ({ result, onBack }) => {
  return (
    <div className="dr-container">
      <div className="dr-title">
        {/* Back Button */}
        <div className="dr-background"onClick={onBack} style={{ cursor: 'pointer' }}>
          <img src={back} width="40px" alt="Back" />
        </div>
        <h1>Plant Disease Detection</h1>
      </div>

      <div className="dr-body">
        {/* Display Uploaded Image */}
        {result.image && <img src={result.image} width="250px" height="200px" alt="Detected Plant" className="result-image" />}

        {/* Display Classification Details */}
        <div className="dr-details">
          <p><strong>Name &emsp;&emsp; : &nbsp;</strong> {result.plant_name || "Unknown"}</p>
          <p><strong>Status &emsp;&nbsp;&nbsp;&nbsp; : &nbsp;</strong> {result.status || "Unknown"}</p>
          <p><strong>Disease &emsp;&nbsp; : &nbsp;</strong> {result.disease || "Unknown"}</p>
          <p><strong>Accuracy &nbsp;&nbsp; : &nbsp;</strong> {result.accuracy ? `${result.accuracy}%` : "Unknown"}</p>
        </div>
      </div>

      <div className="dr-btn">
        <button>Farm AI &nbsp; &#x2197;</button>
      </div>
    </div>
  );
};

export default DisplayResult;
