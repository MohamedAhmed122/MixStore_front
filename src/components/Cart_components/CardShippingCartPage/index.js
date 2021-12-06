import React from "react";
import { Icon } from "../../../assets/FolderIcon";
import "./style.css";

export default function CardShippingCartPage() {
  return (
    <div>
      <div className="card_shipping_cart">
        <div className="card_text_shipping_margin">
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
    </div>
  );
}
