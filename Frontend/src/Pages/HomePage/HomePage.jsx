import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Landing from '../../Components/Landing/Landing'

const Home = () => {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="hero-section">
            <Sidebar />
            <Landing />
        </div>
    </div>
  )
}

export default Home