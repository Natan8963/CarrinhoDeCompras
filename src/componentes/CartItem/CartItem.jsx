import React from "react";

import "./CartItem.css"
import { QuantityPicker } from "react-qty-picker";

function CartItem({data}   ){

   const {photo, name, price } = data;

 return (
  <section className="cart-item">
    <div className="cart-item-image ">
      <img src={photo} alt="imagem do produto " className="cart-item-imagem-child"/>
    </div>

    <div className="cart-item-desc">
      <p>{name}</p>


    </div>
    <div className="cart-item-qauntidade">
      <QuantityPicker />
    </div>
    <div className="cart-item-preco">
    <p>{parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

    </div>

  </section>
  
 
  
 );
    
  
}

export default CartItem;