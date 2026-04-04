import React from 'react'
import Layout from '../../Components/Layout/Layout.jsx';
import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product.jsx";


function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing
