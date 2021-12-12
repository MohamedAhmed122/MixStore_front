import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCartItems, removeCartItem } from "../../../redux/cart/action";
import { useHistory } from "react-router-dom";

import CardCart from "../../../components/Cart_components/CardCartPageProducts";
import CardShipping from "../../../components/Cart_components/CardShippingCartPage";
import CardPayment from "../../../components/Cart_components/CardPaymentCartPage";
import CardTotalCart from "../../../components/Cart_components/cardTotalCartProductPage";

import image from "../../../assets/pngwings.png";

import "./style.css";

export function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item));
  };

  const handleRemoveAllItems = () => dispatch(removeAllCartItems());

  const handleNavigateToCheckout = () =>
    isAuthenticated ? history.push("/checkout") : history.push("/login");

  return (
    <div className="full_page_cart">
      <div className="cart_holder">
        <div className="left_side_cart">
          <div>
            <img className="bagImage_cart" src={image} alt="img" />
            <h2 className="mienTextCardCartPage"> Confirm & Pay </h2>
          </div>
          <div className="products_cards_cart_page">
            {cartItems.map((item) => (
              <CardCart
                item={item}
                key={item._id}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </div>
        </div>
        <div className="right_side_cart">
          <CardShipping />
          <CardPayment />
          <CardTotalCart />
        </div>
      </div>
      <div onClick={handleRemoveAllItems} style={{ color: "green" }}>
        Clear
      </div>
      <div
        style={{ backgroundColor: "red" }}
        onClick={handleNavigateToCheckout}
      >
        {" "}
        checkOut
      </div>
    </div>
  );
}
