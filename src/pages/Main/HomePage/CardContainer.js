import React from "react";
import Error from "../../../commons/Error";
import Loading from "../../../commons/Loading";
import Card from "../../../components/Card";

export default function CardContainer({
  isLoading,
  error,
  products,
  handleNavigate,
}) {
  if (isLoading) return <Loading visible={isLoading} />;
  if (error) return <Error />;
  return (
    <>
      {products?.map((product) => (
        <Card
          key={product._id}
          item={product}
          handleNavigate={handleNavigate}
        />
      ))}
    </>
  );
}
