import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./styles.css";
import { COLORS } from "../../styles/colors";
import { useToggle } from "../../hooks/useToggle";

export default function Card({ handleNavigate, item }) {
  const { value: like, toggleButton: toggleLikeButton } = useToggle();
  const { value: love, toggleButton: toggleLoveButton } = useToggle();
  return (
    <div className="card_home_page" onClick={() => handleNavigate(item._id)}>
      <img className="img_item_home_page" src={item.image} alt="imagItem" />
      <div className="item_des_home_page ">
        <h3 className="item_name_home_page "> {item.name} : </h3>
        <h3 className="item_price_home_page "> {item.price}$ </h3>
        <ThumbUpIcon
          onClick={toggleLikeButton}
          // style={{color: COLORS.white}}
          style={{ color: like ? COLORS.white : COLORS.blue }}
        />
        {love ? (
          <FavoriteBorderIcon
            onClick={toggleLoveButton}
            style={{ color: COLORS.white }}
          />
        ) : (
          <FavoriteIcon
            onClick={toggleLoveButton}
            style={{ color: COLORS.white }}
          />
        )}
      </div>
    </div>
  );
}
