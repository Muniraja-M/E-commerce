import React from 'react';
import '../styles.css';
function ProductItem({ product, onAddToCart, isBrief }) {
    const briefDetails = (
        <>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating?.rate}</p>
            <p>Reviews: {product.rating?.count}</p>
        </>
    );
    return (
        <div className='item-container'>
            <img
                className='grid-container'
                src={product.image}
                alt={product.title}
            />
            <div class='details-list'>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                {isBrief && briefDetails}
                <button
                    className='addCart-button'
                    onClick={() => onAddToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
