import React from "react";
import { Icon } from "../../../assets/FolderIcon";
import "./style.css";

export default function CardPaymentCartPage() {
  return (
    <div>
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
    </div>
  );
}
