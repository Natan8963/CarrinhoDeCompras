import React, { useContext } from "react";

import './Cart.css';
import CartItem from "../CartItem/CartItem";
import { IoIosCloseCircle } from "react-icons/io";
import AppContext from "../../context/AppContex";

function Cart(){

  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);
  

  return(
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`} >
      <div className="cart_container">
        <div className="cart_header" > 
          <div>
              <h4>Carrinho <br /> de compras</h4>  
          </div>
        <div className="icon_fechar">
            <button onClick={()=> setIsCartVisible(!isCartVisible)}>
              <IoIosCloseCircle  size={40} />
            </button> 
          </div>
        </div>
        <div className="cart_container">
          {
            cartItems.map((cart) =><CartItem key={cart.id} data={cart} /> )
          }
        </div>
      </div>
      <div className="cart_footer" >
            <div className="cart-total">
                <p>Total: </p>
                <p>5800</p>
            </div>
            <button className="finalizar" >
                Finalizar Compra
            </button>
      </div>
     
     
    
      
      
    </section>
  )
}

export default Cart;