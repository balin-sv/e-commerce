import React, { useEffect, useState } from "react";
import CardsContainer from "../components/cards-container/cards-container";
import ApiService from "../services/api-service";
import Card from "../components/card";
import { useOutletContext } from "react-router-dom";

function MainPage() {
  const apiService = new ApiService();
  const [categories, setCategories] = useState([]);
  const { setIsLoaded } = useOutletContext();

  useEffect(() => {
    let mounted = true;
    setIsLoaded(true);
    (async () => {
      try {
        const res = await apiService.getAllCategories("/products/categories");
        if (mounted) {
          setCategories(res);
          setTimeout(() => {
            setIsLoaded(false);
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return () => (mounted = false);
  }, []);

  const categoriesCollection = categories.map((category) => (
    <Card key={category} category={category} />
  ));

  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">Caterorias</h1>
      <div>
        <CardsContainer items={categoriesCollection} />
      </div>
    </>
  );
}

export default MainPage;
