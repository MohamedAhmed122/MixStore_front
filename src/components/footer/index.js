import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/action";
import { Link } from "react-router-dom";
import Image from "../../assets/logo_3.png";
import "./style.css";

export default function Footer() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser());

  return (
    <div className="full_page">
      <div className="footer_for_pages">
        <div className="footer_line" />

        <div className="footer_sides">
          <div className="lift_side_footer">
            <ul className="ul_footer_page">
              <li className="li_footer_page">
                {isAuthenticated ? (
                  <div onClick={handleLogout} className="link_footer_logout">
                    Logout
                  </div>
                ) : (
                  <>
                    <Link className="link_footer" to="/logIn">
                      Log In
                    </Link>
                    <Link className="link_footer" to="/register">
                      Register
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
          <Link className="link_Logo_footer" to="/">
            <img alt="logoImage" src={Image} className="medal_footer" />
          </Link>

          <div className="right_side_footer">
            <ul className="ul_footer_page">
              <li className="li_footer_page">
                <Link className="link_footer" to="/MyOrderPage">
                  Make your Order
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy_text">
          <p> © 2021 Mix Store, Inc. </p>
        </div>
      </div>
    </div>
  );
}
