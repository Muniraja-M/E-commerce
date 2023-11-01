import React from "react";

function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Rating: {product.rating.rate}</p>
      <p>Reviews: {product.rating.count}</p>
    </div>
  );
}

export default ProductDetail;
