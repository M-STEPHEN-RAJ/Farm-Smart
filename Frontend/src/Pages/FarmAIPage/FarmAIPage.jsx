import React from 'react'
import './FarmAIPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import FarmAI from '../../Components/FarmAI/FarmAI'

const FarmAIPage = () => {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="hero-section">
            <Sidebar />
            <FarmAI />
        </div>
    </div>
  )
}

export default FarmAIPage