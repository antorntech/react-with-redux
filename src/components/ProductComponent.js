import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //   const { id, title, category } = products[0];
  return (
    <div>
      <div className="product-banner">
        <img src="#" alt="" />
      </div>
      <div className="product-details"></div>
    </div>
  );
};

export default ProductComponent;
