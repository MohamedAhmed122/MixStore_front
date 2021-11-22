import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/logo_2.png";
import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer_for_pages">
      <div className="footer_line" />
      <div className="footer_sides">
        <div className="lift_side_footer">
          <ul className="ul_footer_page">
            <li className="li_footer_page">
              <Link className="link_footer" to="/">
                HomePage
              </Link>
              <Link className="link_footer" to="/logIn">
                Log In
              </Link>
              <Link className="link_footer" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <img alt="logoImage" src={Image} className="medal_footer" />
        <div className="right_side_footer">
          <ul className="ul_footer_page">
            <li className="li_footer_page">
              <Link className="link_footer" to="/AdminCreateProduct">
                Create Products
              </Link>
              <Link to="">
                <Avatar className="footer_avatar">
                  <InstagramIcon />
                </Avatar>
              </Link>
              <Link to="">
                <Avatar className="footer_avatar">
                  <WhatsAppIcon />
                </Avatar>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy_text">
        <p> © 2021 Mix Store, Inc. </p>
      </div>
    </div>
  );
}
