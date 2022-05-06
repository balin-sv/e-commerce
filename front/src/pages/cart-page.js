import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

function CartPage() {
  const value = useContext(CartContext);

  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">Cart</h1>
      <div>{value.items.length}</div>
      {value.items.map((item) => {
        return (
          <>
            <ul key={item.id} className="list-group mt-3 ">
              <li className="list-group-item active">{item.title}</li>
            </ul>
          </>
        );
      })}
    </>
  );
}

export default CartPage;
