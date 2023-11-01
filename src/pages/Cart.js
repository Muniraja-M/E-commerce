import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartslice';

function Cart() {
    const cart = useSelector((state) => state.cart); // Access the cart state using useSelector
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="cartView-container">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            {product.title}
                            <button
                                onClick={() =>
                                    removeFromCartHandler(product.id)
                                }
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
