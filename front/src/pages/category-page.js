import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../services/api-service";
import CardsContainer from "../components/cards-container/cards-container";
import Card from "../components/card";

function CategoryPage() {
  const apiService = new ApiService();
  const { category } = useParams("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiService.getCategory(
          `/products/category/${category}`
        );
        setProducts(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  const productsCollection = products.map((product) => (
    <Card
      id={product.id}
      key={product.id}
      category={product.category}
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image}
    />
  ));

  return (
    <>
      <div>CategoryPage</div>
      <div>
        <CardsContainer items={productsCollection} />
      </div>
    </>
  );
}

export default CategoryPage;
