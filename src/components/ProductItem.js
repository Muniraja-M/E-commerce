// ProductItem.js
import React from "react";
import "../styles.css"

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="container">
      <img className="grid-container" src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
