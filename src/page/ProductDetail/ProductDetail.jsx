import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loder from "../../Components/Loader/Loder";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loder />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
      )}
    </Layout>
  );
}

export default ProductDetail;
