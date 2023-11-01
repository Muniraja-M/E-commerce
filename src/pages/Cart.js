// Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
    const cart = useSelector((state) => state.cart); // Access the cart state using useSelector

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            {product.title}
                            <button onClick={() => removeFromCart(product.id)}>
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
