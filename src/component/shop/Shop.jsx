import React from "react";
import Products from "../Products";
import Product from "./Product";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>Shop Ng</h1>
      </div>
      <div className="products">
        {Products.map((pro) => (
          <Product key={pro.id} data={pro} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
