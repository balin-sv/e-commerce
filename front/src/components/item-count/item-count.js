import React from "react";
import "./item-count.css";

const ItemCount = ({ count, increnemt, decrement }) => {
  // const [count, setCount] = useState(0);

  // function increnemt() {
  //   if (count !== 10) {
  //     setCount(count + 1);
  //   }
  // }

  // function decrement() {
  //   if (count !== 0) {
  //     setCount(count - 1);
  //   }
  // }

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

  return (
    <div className="btn-box">
      {count == 0 ? (
        <button
          onClick={() => {
            increnemt();
          }}
          className="btn-buy btn btn-success"
        >
          Add to cart
        </button>
      ) : (
        <div className="btn-count">
          <button onClick={increnemt} className="btn btn-secondary">
            +
          </button>
          <span className=" count-input ">{count}</span>
          <button
            onClick={() => {
              decrement();
            }}
            className=" btn btn-secondary"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
