// ProductList.js
import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
