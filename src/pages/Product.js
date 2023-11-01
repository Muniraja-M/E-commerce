// Product.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Product() {
    const cart = useSelector((state) => state.cart); // Access the cart state using useSelector
    return (
        <div>
            <h1>{cart.title}</h1>
            <img src={cart.image} alt={cart.title} />
            <p>Price: ${cart.price}</p>
            <p>Description: {cart.description}</p>
            <p>Rating: {cart.rating.rate}</p>
            <p>Reviews: {cart.rating.count}</p>
        </div>
    );
}

export default Product;
