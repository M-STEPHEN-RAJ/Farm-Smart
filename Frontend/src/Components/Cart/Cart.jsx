import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext"; // Import Context

const Cart = () => {
  const { cart } = useContext(CartContext); // Use cart from context

  const totalAmount = cart.reduce((total, item) => total + Number(item.amt), 0);

  return (
    <div className="cart-container">
      <h2>Cart Products</h2>

      {cart.length === 0 ? (
        <p className="empty-cart-txt">No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-product">
              <img src={item.pic} alt={item.name} />
              <div className="cart-product-desc">
                <span>{item.name}</span>
                <p>Price: ₹{item.amt}</p>
              </div>
            </div>
          ))}

          {/* Show total only if it's greater than 0 */}
          {totalAmount > 0 && (
            <div className="cart-total">
              <h2>Total Amount: <span>&nbsp; ₹ {totalAmount}</span></h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
