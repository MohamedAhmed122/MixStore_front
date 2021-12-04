import React from "react";
import { adminCreateProduct } from "../../../api/requests/products";
import CreateAdminProducts from "../../../components/CreateAdminProducts";
import "./style.css";

export function AdminCreateProduct() {
  const handleCreateProductsSubmit = (values) => {
    const body = {
      ...values,
      ingredients: ["Milk", "banana"],
    };
    adminCreateProduct(body)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <CreateAdminProducts
      handleCreateProductsSubmit={handleCreateProductsSubmit}
    />
  );
}
