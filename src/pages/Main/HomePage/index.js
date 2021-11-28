import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchProducts } from "../../../api/requests/products";
import SwiperHome from "../../../components/Swiper";
import CardContainer from "./CardContainer";
import "./style.css";

// VS -----------------------------GET-----------------------------------------
// 1-Component is Ready - useEffect
// 2-display Loading Component in the middle of the screen , because we don't have data to display
//  3- display Error Component in the middle of the screen , because we don't have data to display

export function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();
  const handleNavigate = (id) => history.push(`/products/detail/${id}`);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

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
