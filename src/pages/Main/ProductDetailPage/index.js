import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { fetchProductsDetail } from "../../../redux/productDetail/action";

import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import Detail from "../../../components/Detail";

export function ProductDetailPage() {
  const { isLoading, error, products } = useSelector(
    (state) => state.productsDetail
  );

  console.log(isLoading, "loading");
  console.log(error, "error");
  console.log(products, "products");

  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(fetchProductsDetail(id));
  }, [dispatch, id]);

  if (isLoading) return <Loading visible={isLoading} />;
  if (error) return <Error />;
  return <Detail item={products} />;
}
