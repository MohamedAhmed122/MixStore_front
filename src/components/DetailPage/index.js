import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import Button from "../../commons/Button";
import React from "react";
import "./style.css";

export default function DetailPage({ item: product }) {
  return (
    <div className="Page_desc_height">
      <div className="card_item_desc">
        <div className="name_likes_part_item_desc">
          <div>
            <h1 className="name_item_desc"> {product.name} </h1>
          </div>
          <div className="likes_item_desc">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite className="fav_icon_desc" />}
            />
            <h3> {product.liked} </h3>
          </div>
        </div>

        <h3 className="desc_item_desc"> {product.desc} </h3>
        <div className="btn_item_desc">
          <Button
            className=""
            text="add to cart"
            color="#CCEDE4"
            marginTop={"40px"}
          />
        </div>
      </div>
      <img className="img_item_desc" src={product.image} alt="imageItem" />
    </div>
  );
}
