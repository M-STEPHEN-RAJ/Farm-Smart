import React from 'react'
import './CartPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Cart from '../../Components/Cart/Cart'

const CartPage = () => {
  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="Cart-section">
            <Cart />
        </div>
    </div>
  )
}

export default CartPage