import React from "react";
import "./styles.css";

export default function Card({ item, handleNavigate }) {
  return (
    <div className="card_product" onClick={() => handleNavigate(item._id)}>
      <img className="card_product_img" src={item.image} alt="imagItem" />
      <div className="card_product_desc">
        <h3 className="card_product_name">{item.name} </h3>
        <h3 className="card_product_price"> {item.price}$</h3>
      </div>
    </div>
  );
}
