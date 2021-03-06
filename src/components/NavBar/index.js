import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../../assets/logo_3.png";
import Avatar from "@mui/material/Avatar";
import { Icon } from "../../assets/FolderIcon";
import "./style.css";

export default function NavBar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log(user, "NavBar");
  return (
    <div className="nav_bar">
      <div className="left_side">
        <Link className="link_Logo" to="/">
          <img className="logo_image_nav" src={Image} alt="logo_image" />
        </Link>
        <h1 className="logo_name_nav"> Mix Store </h1>
      </div>
      <div className="right_side">
        <ul className="ul_nav_par_page">
          <li className="li_nav_par_page">
            {isAuthenticated ? (
              <div className="link">{user.name} </div>
            ) : (
              <>
                <Link className="link" to="/logIn">
                  Log In
                </Link>
                <Link className="link" to="/register">
                  Register
                </Link>
              </>
            )}
            <Link className="link" to="/cart">
              <Avatar className="avatar">{Icon.AddShoppingCartIcon}</Avatar>
            </Link>
            <Link className="link" to="/favorite">
              <Avatar className="avatar">{Icon.FavoriteBorderIcon}</Avatar>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
