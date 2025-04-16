import React, { useContext } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import logo_img from '../../assets/logo.png'
import menu_img from '../../assets/menu_img.svg'
import info_img from '../../assets/info_img.svg'
import cart_img from '../../assets/cart_img.svg'
import notify_img from '../../assets/notification_img.svg'
import profile_img from '../../assets/farmer - Copy.png'
import { CartContext } from "../../Context/CartContext"; 


const Navbar = () => {

    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

  return (
    <div className='navbar'>

        <div className="navbar-left" onClick={() => navigate("/")}>
            <div className="nav-background">
                <img title='menu' className='menu-icon' src={menu_img} alt="" />
            </div>
            <div className="logo">
                <img src={logo_img} alt="" />
                <h1>FarmSmart</h1>
            </div>
        </div>

        <div className="navbar-right">
            <a href="/Journal Paper.pdf" target="_blank" rel="noopener noreferrer">
                <div className="nav-background">
                    <img title="info" className="notify-icon" src={info_img} alt="Info" />
                </div>
            </a>

            <Link to={'/notification'}>
                <div className="nav-background">
                    <img title='notification' className='notify-icon' src={notify_img} alt="" />
                </div>
            </Link>
       
            <Link to={'/cart'}>
                <div className="nav-background">
                    <div className="cart-container">
                        <img title='cart' className='cart-icon' src={cart_img} alt="Cart" />
                        <span className="cart-badge">{cart.length}</span>
                    </div>
                </div>
            </Link>     

            <div className="profile-background">
                <img title='profile' src={profile_img} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Navbar