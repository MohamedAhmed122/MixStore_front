import React from "react";
import CardCartPageProducts from "../../../components/Cart_components/CardCartPageProducts";
import CardShippingCartPage from "../../../components/Cart_components/CardShippingCartPage";
import CardPaymentCartPage from "../../../components/Cart_components/CardPaymentCartPage";
import CardTotalCartProductPage from "../../../components/Cart_components/cardTotalCartProductPage";
import image from "../../../assets/pngwings.png";
import "./style.css";

export function CartPage() {
  return (
    <div className="full_page_cart">
      <div className="cart_holder">
        <div className="left_side_cart">
          <div>
            <img className="bagImage_cart" src={image} alt="img" />
            <h2 className="mienTextCardCartPage"> Confirm & Pay </h2>
          </div>
          <CardCartPageProducts />
        </div>
        <div className="right_side_cart">
          <CardShippingCartPage />
          <CardPaymentCartPage />
          <CardTotalCartProductPage />
        </div>
      </div>
    </div>
  );
}
