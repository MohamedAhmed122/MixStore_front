import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { fetchProductsDetail } from "../../../redux/productDetail/action";

import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import Detail from "../../../components/Detail";
import { addCartItem } from "../../../redux/cart/action";

export function ProductDetailPage() {

  const { id } = useParams();
  const history = useHistory()

  const { isLoading, error, product } = useSelector(
    (state) => state.productDetail
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsDetail(id));
  }, [dispatch, id]);


  const handleAddItemToCart = () =>{
    dispatch(addCartItem(product))
    history.push('/cart')
  }


  if (isLoading) return <Loading visible={isLoading} />;
  if (error || !product) return <Error />;
  return <Detail item={product} handleAddItemToCart={handleAddItemToCart}/>;
}
