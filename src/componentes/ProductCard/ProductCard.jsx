import React from "react";

function ProductCard({data}){
  const {name, photo, price} = data;
  return(
    <section className="product-card" >
      <div style={{width: '200px'}}>
        <img src={photo}  alt="product-card" className="card_image"/>
      </div>

     <div className="card_infos" >
      <h2 className="card_price">{parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2></div>
      <h2 className="card__title" >{name}</h2>
    </section>

    

        

    
  );
}

export default ProductCard;
