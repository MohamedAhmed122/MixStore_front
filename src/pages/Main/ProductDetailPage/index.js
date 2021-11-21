import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProduct } from "../../../api/requests/products";
import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import Detail from "../../../components/Detail";

export function ProductDetailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetchProduct(id)
        .then((res) => setProduct(res))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }
  }, [id]);


  if (isLoading) return <Loading visible={isLoading} />;
  if (error) return <Error />;
  return <Detail item={product} />;
}
