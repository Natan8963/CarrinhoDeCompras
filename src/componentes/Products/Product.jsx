import React, {useEffect, useContext } from 'react';

import './Product.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContex';

function Products() {

  const {products, setProducts, loading, setLoading  }= useContext(AppContext);
 
  

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setLoading(false)
      
    });
  }, []);

  return (

   (loading && <Loading/>  || ( 
   <section className="products-container">
    {products.map((product) => <ProductCard key={product.id} data={product} />)}
  </section>) 
  )
  );
}

export default Products;