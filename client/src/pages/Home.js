import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Upload from "../components/Cloudinary";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Upload />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
