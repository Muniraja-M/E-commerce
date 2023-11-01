// ProductItem.js
import React from 'react';
import '../styles.css';

function ProductItem({ product, onAddToCart }) {
    return (
        <div className='item-container'>
            <img
                className='grid-container'
                src={product.image}
                alt={product.title}
            />
            <div class="details-list">
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <button className="addCart-button" onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
