import React from 'react';
import { useSelector } from 'react-redux';
function Product() {
    const cart = useSelector((state) => state.cart);

    return (
        <div>
             <div className='search-container'>
                <h1 className='font'>Product Page</h1>
                <SearchBar onSearch={(query) => setSearchQuery(query)} />
            </div>
            <h1>{cart.title}</h1>
            <img src={cart.image} alt={cart.title} />
            <p>Price: ${cart.price}</p>
            <p>Description: {cart.description}</p>
            <p>Rating: {cart.rating?.rate}</p>
            <p>Reviews: {cart.rating?.count}</p>
        </div>
    );
}

export default Product;
