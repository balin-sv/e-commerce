import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../services/api-service";
import CardsContainer from "../components/cards-container/cards-container";
import Card from "../components/card";
import Modal from "./modal";
import { useOutletContext } from "react-router-dom";

function CategoryPage() {
  const apiService = new ApiService();
  const { category } = useParams("");
  const [products, setProducts] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const { setIsLoaded } = useOutletContext();

  const onSetModalInfo = (info) => {
    console.log("in", info);
    setModalInfo(info);
  };

  const onSetModal = (value) => {
    setIsModal(value);
  };

  useEffect(() => {
    let mounted = true;
    setIsLoaded(true);
    (async () => {
      try {
        const res = await apiService.getCategory(
          `/products/category/${category}`
        );
        if (mounted) {
          setProducts(res);
          setTimeout(() => {
            setIsLoaded(false);
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return () => (mounted = false);
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
      onSetModalInfo={onSetModalInfo}
      onSetModal={onSetModal}
    />
  ));

  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">{category}</h1>
      <div>
        <CardsContainer items={productsCollection} />
      </div>
      <div>
        {isModal === true ? (
          <Modal
            modalInfo={modalInfo}
            onSetModal={onSetModal}
            isModal={isModal}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CategoryPage;
