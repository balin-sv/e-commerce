import React, { useEffect, useState } from "react";
import CardsContainer from "../components/cards-container/cards-container";
import ApiService from "../services/api-service";
import Card from "../components/card";

function MainPage() {
  const apiService = new ApiService();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiService.getAllCategories("/products/categories");
        setCategories(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const categoriesCollection = categories.map((category) => (
    <Card key={category} category={category} />
  ));

  return (
    <>
      <div>Caterorias</div>
      <div>
        <CardsContainer items={categoriesCollection} />
      </div>
    </>
  );
}

export default MainPage;
