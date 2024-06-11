import React from "react";
import './Header.css'
import CartButton from "../CartButton/CartButton";
function Header() {
  
  return (
    <header className="header" > 
      <div className="logo" >
        <h1>MKS</h1>
        <h3>Sistemas</h3>
      </div>
      <div>
        <CartButton />
      </div>

    </header>
  );

}

export default Header;