import React, { useState } from 'react';
import './DiseaseDetection.css';
import UploadImage from './UploadImage/UploadImage';
import DisplayResult from './DisplayResult/DisplayResult';

const DiseaseDetection = () => {
  const [result, setResult] = useState(null);

  return (
    <div className='disease-container'>
      {result ? (
        <DisplayResult result={result} onBack={() => setResult(null)} />
      ) : (
        <UploadImage onResult={setResult} />
      )}
    </div>
  );
};

export default DiseaseDetection;
