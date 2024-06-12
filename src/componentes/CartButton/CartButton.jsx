import React, { useContext } from "react";
import './CartButton.css'

import { FaShoppingCart } from "react-icons/fa";
import AppContext from "../../context/AppContex";
function CartButton(){
  const {isCartVisible, setIsCartVisible, cartItems} = useContext(AppContext);

  const handleVisible = () => {
    setIsCartVisible(!isCartVisible);
  }
return(
  <button type="button" onClick={handleVisible} className="cart__button">
    <FaShoppingCart className="cart__icon"/>
    <span>{cartItems.length}</span>
  </button>
)
}

export default CartButton;