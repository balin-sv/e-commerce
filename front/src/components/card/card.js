import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../item-count";
import { CartContext } from "../../context/cart-context";
import "./card.css";

const Card = ({
  id = "",
  category = null,
  title = null,
  price = null,
  description = null,
  image = null,
  onSetModalInfo,
  onSetModal,
}) => {
  const [count, setCount] = useState(0);
  const value = useContext(CartContext);

  function increnemt() {
    if (count !== 10) {
      setCount(count + 1);
      value.addItem({ category, id, title, price });
    }
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
      value.removeItem(id, category);
    }
  }

  // const goToCart = (data, count, startDate) => {
  //   const newObj = {
  //     id: value.generateItemID(),
  //     data: data,
  //     price: data.price,
  //     qty: count,
  //     date: startDate,
  //     total: (function () {
  //       return data.price * count;
  //     })(),
  //   };

  //   value.addItem(newObj);
  //   navigate("/cart");
  // };

  const navigate = useNavigate();
  const goToItem = () => {
    navigate(`/${category}`);
  };
  return (
    <>
      <div class="card m-3">
        <div className="d-flex justify-content-center m-2">
          <img
            onClick={() => {
              onSetModalInfo({
                id,
                category,
                title,
                price,
                description,
                image,
              });
              onSetModal(true);
            }}
            src={
              image
                ? image
                : "https://www.thesoftwarereport.com/wp-content/uploads/2021/07/Shopify.jpg"
            }
            class="img img-fluid"
            alt="imagen"
          />
        </div>

        {id ? (
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <h5 class="bold card-title">{`Price ${price} $`}</h5>
            <div className="d-flex justify-content-center">
              <ItemCount
                count={count}
                increnemt={increnemt}
                decrement={decrement}
              />
            </div>
          </div>
        ) : (
          <div class="card-body">
            <h4 class="card-title">{category}</h4>
            <h5 class="card-title">{title}</h5>
            <p class=" text card-text">{description}</p>
            <h5 class="card-title">{price}</h5>
            <button onClick={() => goToItem()} class="btn btn-primary">
              Ver categora
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
