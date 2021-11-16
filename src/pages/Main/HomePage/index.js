import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchProducts } from "../../../api/requests/products";
import Error from "../../../commons/Error";
import Loading from "../../../commons/Loading";
import Card from "../../../components/Card";
import "./style.css";

export function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();
  const handleNavigate = (id) => history.push(`/products/detail/${id}`)

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

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="home_page">
      {products.map((product) => (
        <Card key={product._id} item={product} handleNavigate={handleNavigate}/>
      ))}
    </div>
  );
}
