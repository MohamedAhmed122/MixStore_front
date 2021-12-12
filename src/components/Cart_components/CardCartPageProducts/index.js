import React from "react";
import "./style.css";

export default function CardCartPageProducts({ item, handleRemoveItem }) {
  return (
    <div className="product_card_cart_page">
      <img
        className="img_product_card_cart_page"
        src="https://aseasyasapplepie.com/wp-content/uploads/2017/01/avocado-strawberry-layered-smoothie-500x500.jpg"
        alt="Ju_img"
      />
      <h3 className="text_name_product_cart"> {item.name}</h3>
      <p className="text_name_product_cart"> $12 </p>
      <div onClick={() => handleRemoveItem(item)}>X</div>
    </div>
  );
}
