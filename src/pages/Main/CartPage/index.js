import React from "react";
import Image from "../../../assets/pngwings.png";
import { Icon } from "../../../assets/FolderIcon";
import "./style.css";

export function CartPage() {
  return (
    <div className="full_page_cart">
      <div className="cart_holder">
        <div className="left_side_cart">
          <div>
            <img className="bagImage_cart" src={Image} alt="pngImage" />
            <h2 className="text_bag_cart_page"> Confirm & Pay </h2>
          </div>
          <div className="products_cards_cart_page">
            <div className="product_card_cart_page">
              <img
                className="img_product_card_cart_page"
                src="https://aseasyasapplepie.com/wp-content/uploads/2017/01/avocado-strawberry-layered-smoothie-500x500.jpg"
                alt="Ju_img"
              />
              <h3 className="text_name_product_cart"> Mix Strawberry Juice </h3>
              <p className="text_name_product_cart"> $12 </p>
            </div>
            <div className="product_card_cart_page">
              <img
                className="img_product_card_cart_page"
                src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg"
                alt="Ju_img"
              />
              <h3 className="text_name_product_cart"> Mix Orange Juice </h3>
              <p className="text_name_product_cart"> $12 </p>
            </div>
            <div className="product_card_cart_page">
              <img
                className="img_product_card_cart_page"
                src="https://nitrocdn.com/wGQBfjwJxisdWFaHfyrEIdkKcKRLgtJH/assets/static/optimized/rev-73da4cb/wp-content/uploads/2018/01/orange-hot-chocolate-3.jpg"
                alt="Ju_img"
              />
              <h3 className="text_name_product_cart"> Mix Chocolate Juice </h3>
              <p className="text_name_product_cart"> $12 </p>
            </div>
          </div>
        </div>
        <div className="right_side_cart">
          <div className="cards_detail_cart">
            <div className="card_shipping_cart">
              <div className="card_text_shipping_margin" >
                <h3 className="text_card_shipping">shipping information</h3>
                <div className="icon_text_shipping">
                  <div>{Icon.PermIdentityIcon}</div>
                  <p className="name_card_shipping">Kareem Mohamed </p>
                </div>
                <div className="icon_text_shipping">
                  <div>{Icon.FmdGoodIcon}</div>
                  <p className="name_card_shipping"> Alex Egypt </p>
                </div>
                <div className="icon_text_shipping">
                  <div>{Icon.PhoneIphoneIcon}</div>
                  <p className="name_card_shipping">012 - 034 - 411 - 00</p>
                </div>
              </div>
            </div>
            <div className="card_pay_cart">
              <h3 className="text_card_shipping"> Payment</h3>
              <div className="icon_text_shipping">
                <div> {Icon.CreditScoreIcon} </div>
                <div className="icon_text_shipping">
                  <p className="name_card_shipping"> 1234 5677 7896 8976 </p>
                  <p className="name_card_shipping"> Exp (12/12) 765 </p>
                </div>
              </div>
              <div className="icon_text_shipping">
                <div>{Icon.CheckIcon}</div>
                <p className="name_card_shipping">Use Shipping Address</p>
              </div>
            </div>
            <div className="card_total_cart">
              <div className="pay_card_text">
                <p>Subtotal:</p> <p>$ 36.00</p>
              </div>
              <div className="pay_card_text">
                <p>Taxes:</p> <p>Free</p>
              </div>
              <div className="pay_card_text_total">
                <p>Total:</p> <p>$36.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
