import React, { useEffect, useState } from "react";
import Loading from "../commons/Loading";
import Error from "../commons/Error";
import { getProducts } from "./request";

export default function SandBox() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((response) => {
        setProducts(response.products);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading visible={isLoading} />;
  if (error) return <Error />;
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>{product.name} </div>
      ))}
    </div>
  );
}
