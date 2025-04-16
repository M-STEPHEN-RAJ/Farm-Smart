import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import BuySeeds from '../../Components/BuySeeds/BuySeeds'

const BuySeedPage = () => {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="hero-section">
            <Sidebar />
            <BuySeeds />
        </div>
    </div>
  )
}

export default BuySeedPage