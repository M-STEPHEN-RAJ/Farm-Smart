import React from 'react'
import './Landing.css'
import farmer from '../../assets/farmer.png'
import logo from '../../assets/logo.png'
import Weather from '../Weather/Weather'

const Landing = () => {
  return (
    <div className='landing-page'>

      <Weather />

      <div className="landing-container">
        
        <div className="landing-left">
          <div className="farmSmart-logo">
            <img src={logo} alt="" />
            <p>FarmSmart</p>
          </div>
          <div className="landing-desc">
            <p>Revolutionizing Farming with Smart Solutions.</p>
            <button onClick={() => window.location.href = '/smart-farm-ai'}>Try Farm AI &nbsp; &#x2197;</button>
          </div>
        </div>

        <div className="landing-right">
          <div className="farmer-img">
            <img src={farmer} alt="" />
            <div className="farmer-bg"></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Landing