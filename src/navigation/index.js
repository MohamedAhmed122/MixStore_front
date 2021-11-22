import React from "react";
import { Route, Switch } from "react-router-dom";
import { CartPage } from "../pages/Main/CartPage";
import { FavoritePage } from "../pages/Main/FavoritePage";
import { HomePage } from "../pages/Main/HomePage";
import { LoginPage } from "../pages/Main/LoginPage";
import { ProductDetailPage } from "../pages/Main/ProductDetailPage";
import { RegisterPage } from "../pages/Main/RegisterPage";
import SandBox1 from "../sandbox/SandBox1";
import { AdminCreateProduct } from "../pages/Admin/CreateNewProduct";
export default function Navigation() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/products/detail/:id" component={ProductDetailPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/favorite" exact component={FavoritePage} />
      <Route path="/sandbox2" exact component={SandBox1} />
      <Route path="/AdminCreateProduct" exact component={AdminCreateProduct} />
    </Switch>
  );
}
