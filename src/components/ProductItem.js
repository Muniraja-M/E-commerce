import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles.css';
function ProductItem({ product, onAddToCart, isBrief }) {
    const navigate = useNavigate();
    const briefDetails = (
        <>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating?.rate}</p>
            <p>Reviews: {product.rating?.count}</p>
        </>
    );
    const redirectHandler = () => {
        navigate(`/productDetail/${product.id}`);
    };
    return (
        <div className='item-container'>
            <img
                className='grid-container'
                src={product.image}
                alt={product.title}
                onClick={(product) => redirectHandler(product)}
            />
            <div class='details-list'>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                {isBrief && briefDetails}
                {isBrief ? (
                    ''
                ) : (
                    <button
                        className='addCart-button'
                        onClick={() => onAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
