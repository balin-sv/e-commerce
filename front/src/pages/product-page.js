import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../services/api-service";
import CardsContainer from "../components/cards-container/cards-container";
import Card from "../components/card";

function ProductPage() {
  const apiService = new ApiService();
  const { id } = useParams("");
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await apiService.getProducts(`/products/${id}`);
        setProduct(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  // "https://fakestoreapi.com/products/1")

  // const productsCollection = products.map((product) => (
  //   <Card
  //     key={product.id}
  //     category={product.category}
  //     title={product.title}
  //     price={product.price}
  //     description={product.description}
  //     image={product.image}
  //   />
  // ));

  return (
    <>
      <div>ProductPage</div>
      <div>{product}</div>
      {/* <div>
        <CardsContainer items={productsCollection} />
      </div> */}
    </>
  );
}

export default ProductPage;
