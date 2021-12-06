import React from "react";
import "./style.css";

export default function CardCartPageProducts() {
  return (
    <div className="products_cards_cart_page">
      <div className="product_card_cart_page">
        <img
          className="img_product_card_cart_page"
          src="https://aseasyasapplepie.com/wp-content/uploads/2017/01/avocado-strawberry-layered-smoothie-500x500.jpg"
          alt="Ju_img"
        />
        <h3 className="text_name_product_cart"> Mix Strawberry Juice</h3>
        <p className="text_name_product_cart"> $12 </p>
      </div>
      <div className="product_card_cart_page">
        <img
          className="img_product_card_cart_page"
          src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg"
          alt="Ju_img"
        />
        <h3 className="text_name_product_cart"> Mix Strawberry Juice</h3>
        <p className="text_name_product_cart"> $12 </p>
      </div>
      <div className="product_card_cart_page">
        <img
          className="img_product_card_cart_page"
          src="https://nitrocdn.com/wGQBfjwJxisdWFaHfyrEIdkKcKRLgtJH/assets/static/optimized/rev-73da4cb/wp-content/uploads/2018/01/orange-hot-chocolate-3.jpg"
          alt="Ju_img"
        />
        <h3 className="text_name_product_cart"> Mix Strawberry Juice</h3>
        <p className="text_name_product_cart"> $12 </p>
      </div>
    </div>
  );
}
