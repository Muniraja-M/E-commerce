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
        <div className='col-lg-12 col-md-12 mb-4 mb-lg-0 bg-secondary p-2 text-dark bg-opacity-10 rounded-4'>
            <img
                className='grid-container'
                src={product.image}
                alt={product.title}
                onClick={(product) => redirectHandler(product)}
            />
            <div className='details-list'>
                <h2 className='h5'>{product.title}</h2>
                <p>Price: ${product.price}</p>
                {isBrief && briefDetails}
                {isBrief ? (
                    ''
                ) : (
                    <button
                        type='button'
                        className='btn btn-outline-success'
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
