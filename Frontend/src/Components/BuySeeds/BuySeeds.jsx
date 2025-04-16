import React, { useState, useContext } from 'react';
import './BuySeeds.css';
import data from '../../assets/assets';
import { CartContext } from "../../Context/CartContext"; 

const BuySeeds = () => {
  const { cart, handleToggleCart } = useContext(CartContext);

  return (
    <div className='buyseeds'>
      {data.map((seed) => (
        <div key={seed.id} className="card">
          <img src={seed.pic} alt={seed.name} />
          <div className="seed-desc">
            <h3>{seed.name}</h3>
            <p>Price: ₹{seed.amt}</p>
            <button 
              onClick={() => handleToggleCart(seed)}  // ✅ Pass full seed object
              className={cart.some(item => item.id === seed.id) ? 'remove-btn' : ''}
            >
              {cart.some(item => item.id === seed.id) ? 'Remove' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuySeeds;
