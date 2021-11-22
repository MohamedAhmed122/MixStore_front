import React from "react";
import CreateAdminProducts from "../../../components/CreateAdminProducts"; 
import "./style.css";

export  function AdminCreateProduct() {
  const handleCreateProductsSubmit = (values) => {
    console.log(values);
  };
  return (
    <CreateAdminProducts
      handleCreateProductsSubmit={handleCreateProductsSubmit}
    />
  );
}
