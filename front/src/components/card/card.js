import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({
  id = "",
  category = null,
  title = null,
  price = null,
  description = null,
  image = null,
}) => {
  const navigate = useNavigate();
  const goToItem = () => {
    navigate(`/${category}/${id}`);
  };
  return (
    <>
      <div class="card m-3">
        <div className="d-flex justify-content-center mt-2">
          <img src={image} class="img-thumbnail img-fluid" alt="..." />
        </div>
        <div class="card-body">
          <h4 class="card-title">{category}</h4>
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <h5 class="card-title">{price}</h5>
          <button onClick={() => goToItem()} class="btn btn-primary">
            Ver mas
          </button>
          {price ? (
            <button onClick={() => goToItem()} class="btn btn-primary">
              Comprar
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Card;
