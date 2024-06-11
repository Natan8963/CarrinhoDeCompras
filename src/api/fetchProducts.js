import { jsx } from "react/jsx-runtime";

const fetchProducts = async () =>{
  const response  = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC');
  const {products} = await response.json();

  return products;
}



export default fetchProducts;