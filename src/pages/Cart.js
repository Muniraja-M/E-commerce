import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartslice';

function Cart() {
    const cart = useSelector((state) => state.cart); // Access the cart state using useSelector
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const [quantity, setQuantity]=useState(0);
     
    const incNum =()=>{
        setQuantity(quantity+1)
        
    }
    const DcrNum =()=>{
        if(quantity>0){
        setQuantity(quantity-1)}
        else{
            setQuantity(0)
        }
    }
    return (
        <div className="cartView-container">
            <h1 className='font'>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li className ="list"key={product.id}>
                            <img className='pic'
                            src={product.image}
                            alt={product.title}
            />
                            {product.title}<br/>
                            Price:${product.price}
                            <div className='wrapper'> 
                            <button onClick={DcrNum}>-</button>
                            <span>{quantity}</span>
                            <button onClick={incNum}>+</button>
                            </div>
                            <button className='remove'
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
