import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./cart-widget.css";

const CartWidget = () => {
  // const { items } = useContext(CartContext);
  const [value, setValue] = useState(0);

  return (
    <div style={{ position: "relative", marginLeft: 6 }}>
      <FontAwesomeIcon size="lg" icon={faCartArrowDown} />
      <div
        style={{
          color: "#fff",
          marginLeft: 6,
          fontWeight: "bold",
          position: "absolute",
          left: 6,
          top: -2,
          fontSize: "0.6rem",
          backgroundColor: "#ba000d",
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingLeft: "5px",
          paddingRight: "4px",
          borderRadius: "20%",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default CartWidget;
