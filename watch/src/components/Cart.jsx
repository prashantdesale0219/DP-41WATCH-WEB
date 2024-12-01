// Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeItemFromCart, updateItemQuantity, getTotalPrice } = useContext(CartContext);

  const handleQuantityChange = (itemId, change) => {
    const newQuantity = Math.max(1, cart.find(item => item.id === itemId).quantity + change);
    updateItemQuantity(itemId, newQuantity);
  };
  
  const handleQuantityBtn = {
    height:"30px",
    width:"30px",
    borderRadius:"20px",
    margin:"5px 10px",
    fontSize:"24px",
    outline:"none",
    lineHeight:"30px",
    border:"none",
    backgroundColor:"#2e3133",
    color:"white"
  }

  return (
    <div>
      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{display:"flex",borderBottom:"1px solid black",padding:"20px"}}>
            <div>
            <img src={item.images} height={150} width={150} alt="" />
            </div>
            <div>
            <h5>{item.title}</h5>
            <p>Price: ${item.price || 0}</p>
            <div className='d-flex'>
            <button onClick={() => handleQuantityChange(item.id, -1)} style={{...handleQuantityBtn}}>-</button>
                <span className='pt-2'>{item.quantity }</span>
                <button onClick={() => handleQuantityChange(item.id, 1)} style={{...handleQuantityBtn}}>+</button>
                <h4>${(item.price || 0) * (item.quantity || 0)}</h4>
            </div>
            
            <button onClick={() => removeItemFromCart(item.id)} className='btn btn-danger w-100'>DELETE</button>
            
            </div>
           
          </div>
        ))
      )}
        <h2 className='text-end'>Total: ${getTotalPrice() || 0}</h2>
    </div>
  );
};

export default Cart;
