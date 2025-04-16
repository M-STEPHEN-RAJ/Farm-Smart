import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import home_img from '../../assets/home_img.svg';
import seed_img from '../../assets/seed_img.svg';
import crop_img from '../../assets/crop_img.svg';
import fertilizer_img from '../../assets/fertilizer_img.svg';
import disease_img from '../../assets/disease_img.svg';
import farmAi from '../../assets/farmAi_img.svg';
import settings from '../../assets/settings_img.svg';
import help_img from '../../assets/help_img.svg';
import feedback from '../../assets/feedback_img.svg';
import logout from '../../assets/logout_img.svg';

const Sidebar = () => {

  const location = useLocation(); // Get current URL

  const handleFeedbackClick = () => {
    window.location.href = "mailto:stephenrajm.ug22.ad@francisxavier.ac.in.com?subject=FarmSmart Feedback&body=Hello FarmSmart Team!, ";
  };

  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <Link className='link' to="/">
              <div className={location.pathname === "/" ? "side-background side-active" : "side-background"}>
                <img src={home_img} alt="" />
                <h3>Home</h3>
              </div>
            </Link>

            <Link className='link' to="/buy-seeds">
              <div className={location.pathname === "/buy-seeds" ? "side-background side-active" : "side-background"}>
                <img src={crop_img} alt="" />
                <h3>Buy Seeds</h3>
              </div>
            </Link>

            <Link className='link' to="/crop-recommender">
              <div className={location.pathname === "/crop-recommender" ? "side-background side-active" : "side-background"}>
                <img src={seed_img} alt="" />
                <h3>Crop Recommender</h3>
              </div>
            </Link>

            <div className="side-background">
                <img src={fertilizer_img} alt="" />
                <h3>Fertilizers</h3>
            </div>

            <Link className='link' to="/disease-detection">
              <div className={location.pathname === "/disease-detection" ? "side-background side-active" : "side-background"}>
                  <img src={disease_img} alt="" />
                  <h3>Disease Detection</h3>
              </div>
            </Link>  

            <Link className='link' to="/smart-farm-ai">
              <div className={location.pathname === "/smart-farm-ai" ? "side-background side-active" : "side-background"}>
                <img src={farmAi} alt="" />
                <h3>Farmer&apos;s AI</h3>
              </div>
            </Link>

            <hr className='sidebar-hr-1' />
        </div>

        <div className="sidebar-bottom">
            <div className="side-background">
                <img src={settings} alt="" />
                <h3>Settings</h3>
            </div>

            <div className="side-background">
                <img src={help_img} alt="" />
                <h3>Help</h3>
            </div>

            <div onClick={handleFeedbackClick} className="side-background">
                <img src={feedback} alt="" />
                <h3>Send Feedback</h3>
            </div>

            <div className="side-background">
                <img src={logout} alt="" />
                <h3>Log out</h3>
            </div>

            <hr className="sidebar-hr-2" />

            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; 2025&nbsp;&nbsp; SmartFarm</p>
        </div>
    </div>
  );
};

export default Sidebar;
