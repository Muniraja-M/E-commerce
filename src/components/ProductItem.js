// ProductItem.js
import React from "react";

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
