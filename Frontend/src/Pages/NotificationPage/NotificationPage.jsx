import React from 'react'
import './NotificationPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Notification from '../../Components/Notification/Notification'

const NotificationPage = () => {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="hero-section">
            <Notification />
        </div>
    </div>
  )
}

export default NotificationPage