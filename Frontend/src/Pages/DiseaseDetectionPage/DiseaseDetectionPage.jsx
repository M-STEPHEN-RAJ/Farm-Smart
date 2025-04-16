import React from 'react'
import './DiseaseDetectionPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DiseaseDetection from '../../Components/DiseaseDetection/DiseaseDetection'

const DiseaseDetectionPage = () => {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="hero-section">
            <Sidebar />
            <DiseaseDetection />
        </div>
    </div>
  )
}

export default DiseaseDetectionPage