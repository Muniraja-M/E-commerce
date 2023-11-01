import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, onAddToCart,isBrief }) {
  return (
      <div className='product-container'>
          {products.map((product) => (
              <ProductItem
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  isBrief={isBrief}
              />
          ))}
      </div>
  );
}

export default ProductList;
