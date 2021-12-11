import React from "react";
import Button from "../../commons/Button";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import "./style.css";

export default function Detail({ item: products }) {
  console.log(products);
  return (
    <div className="Page_desc_height">
      <div className="card_item_desc">
        <div className="name_likes_part_item_desc">
          <div>
            <h1 className="name_item_desc"> {products.name} </h1>
          </div>
          <div className="likes_item_desc">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite className="fav_icon_desc" />}
            />
            <h3> {products.liked} </h3>
          </div>
        </div>

        <h3 className="desc_item_desc"> {products.desc} </h3>
        <div className="btn_item_desc">
          <Button text="Add To Cart" type="submit" margin={20} />
        </div>
      </div>
      <img className="img_item_desc" src={products.image} alt="imageItem" />
    </div>
  );
}
