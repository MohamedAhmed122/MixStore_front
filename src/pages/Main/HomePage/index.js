import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { fetchProducts } from "../../../redux/products/action";
// import {axios} from '../../../api/axios'
import SwiperHome from "../../../components/Swiper";
import CardContainer from "./CardContainer";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

// VS -----------------------------GET-----------------------------------------
// 1-Component is Ready - useEffect
// 2-display Loading Component in the middle of the screen , because we don't have data to display
//  3- display Error Component in the middle of the screen , because we don't have data to display

export function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const { products, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // axios.defaults.headers.Authorization = `Bearer ${user?.token}`;

  // console.log(user?.token, 'user?.token')

  const history = useHistory();
  const handleNavigate = (id) => history.push(`/products/detail/${id}`);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home_page">
      <SwiperHome />
      <div className="cardContainer_homePage">
        <CardContainer
          handleNavigate={handleNavigate}
          isLoading={isLoading}
          error={error}
          products={products}
        />
      </div>
    </div>
  );
}
