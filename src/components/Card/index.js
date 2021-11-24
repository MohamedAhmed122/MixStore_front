import React from "react";
import "./styles.css";

export default function Card({ handleNavigate, item }) {
  return (
    <div className="card_home_page" onClick={() => handleNavigate(item._id)}>
      <img className="img_item_home_page" src={item.image} alt="imagItem" />
      <div className="item_des_home_page ">
        <h3 className="item_name_home_page "> {item.name} : </h3>
        <h3 className="item_price_home_page "> {item.price}$ </h3>
      </div>
    </div>
  );
}
