import React from "react";

const CardsContainer = ({ items }) => {
  return (
    <div className="container d-flex flex-wrap justify-content-around">
      {items}
    </div>
  );
};

export default CardsContainer;
