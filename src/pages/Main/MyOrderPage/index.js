import React from "react";
import MakeOrder from "../../../components/MakeOrder";

export function MyOrderPage() {
  const handleMakeOrderSubmit = (values) => {
    console.log(values);
  };
  return <MakeOrder handleMakeOrderSubmit={handleMakeOrderSubmit} />;
}
