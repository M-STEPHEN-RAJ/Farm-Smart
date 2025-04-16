import React from 'react';
import './CropResult.css';
import { useNavigate } from 'react-router-dom';
import seedData from '../../../assets/assets'; 
import back from "../../../assets/arrow_left.svg"

const CropResult = ({ cropData, goBack }) => {
  const { crop, temperature, humidity, ph, rainfall } = cropData;
  const navigate = useNavigate();

  const normalize = (str) => str.toLowerCase().replace(/\s/g, "");

  const matchedSeed = seedData.find(seed =>
    normalize(seed.name).includes(normalize(crop))
  );


  return (
    <div className='crop-container'>

      <img width="40px" src={back} alt="" onClick={goBack} className="crop-result-back" />

      <h2 className='crop-result'>Crop Recommended</h2>

      <div className="crop-recommended-info">
        <img width="260px" height="240px" className='crop-result-img' src={matchedSeed?.pic} alt={crop} />
        <div className="crop-recommended-details">
          <table>
            <thead>
              <tr>
                <th colSpan="2"><h2>{crop} Seed</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p>Temperature (°C)</p></td>
                <td><p className='data'>{temperature}</p></td>
              </tr>
              <tr>
                <td><p>Humidity (%)</p></td>
                <td><p className='data'>{humidity}</p></td>
              </tr>
              <tr>
                <td><p>pH Level</p></td>
                <td><p className='data'>{ph}</p></td>
              </tr>
              <tr>
                <td><p>Rainfall (mm)</p></td>
                <td><p className='data'>{rainfall}</p></td>
              </tr>
              {matchedSeed && (
                <tr>
                  <td><p>Seed Price (₹)</p></td>
                  <td><p className='data'>{matchedSeed.amt}</p></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="go-to-seed">
        <button onClick={() => navigate("/buy-seeds")}>
          Buy Seeds &nbsp; &#x2197;
        </button>
      </div>
    </div>
  );
};

export default CropResult;
