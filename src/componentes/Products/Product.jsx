import React, { useEffect, useState } from 'react';

import './Product.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {

  const [products, setProducts  ]= useState([]);
  

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      
    });
  }, []);

  return (
    
      <section className="products-container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    
    
  );
}

export default Products;