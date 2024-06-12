import React, { useContext } from "react";
import './ProductCard.css';
import { RiShoppingBag3Fill } from "react-icons/ri";
import AppContext from "../../context/AppContex";
function ProductCard({data}){
  const {name, photo, price, description} = data;

  const {cartItems, setCartItems } = useContext(AppContext);

  const handleAdd = () => setCartItems([...cartItems, data ]);



  return(
    <section className="product-card" >
      <div className="image_container" >
        <img src={photo}  alt="product-card" className="card_image"/>
      </div>

     <div className="card_infos" >
        <h4 className="card__title" >{name}</h4>
        <div className="card_price" >
          <p>{parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        
       
      </div>
      <div className="card_description" >
        <p>{description}</p>
      </div>
      <div className="card_footer" >
         <button onClick={handleAdd} className="card_button_comprar" > <RiShoppingBag3Fill /> COMPRAR </button>
      </div>
     
     
      
     

    </section>

    

        

    
  );
}

export default ProductCard;
