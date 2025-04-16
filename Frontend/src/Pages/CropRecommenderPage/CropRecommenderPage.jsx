import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CropRecommender from '../../Components/CropRecommender/CropRecommender/CropRecommender';
import CropResult from '../../Components/CropRecommender/CropResult/CropResult';

const CropRecommenderPage = () => {
  const [result, setResult] = useState(null);

  const handleRecommendationResult = (data) => {
    setResult(data); // data = { crop, temperature, humidity, ph, rainfall }
  };

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero-section">
        <Sidebar />
        {!result ? (
          <CropRecommender onResult={handleRecommendationResult} />
        ) : (
          <CropResult cropData={result} goBack={() => setResult(null)} />

        )}
      </div>
    </div>
  );
};

export default CropRecommenderPage;
