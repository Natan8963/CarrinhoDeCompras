import React from "react";
import './CartButton.css'

import { FaShoppingCart } from "react-icons/fa";
function CartButton(){
return(
  <button type="button" className="cart__button">
    <FaShoppingCart className="cart__icon"/>
    <span>0</span>
  </button>
)
}

export default CartButton;