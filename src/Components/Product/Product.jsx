import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "./Product.module.css"
import Loder from '../Loader/Loder'


function Product() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() =>{
       setIsLoading(true);
axios.get("https://dummyjson.com/products").then((res) => {
    setProducts(res.data.products)
    setIsLoading(false);
}).catch((err) => {
    console.log("API Error:", err);
    setIsLoading(false);
})
    },[])
  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
