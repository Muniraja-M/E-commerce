import React, { useState, useEffect } from 'react';
import { useProducts } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { searchProducts } from '../utils';
import { addToCart } from '../redux/cartslice';
import Notification from '../components/Notification';
import {  fetchProducts } from '../redux/productslice';

function Home({ isBrief }) {
    // const { data: products, isLoading, isError } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const {
        data: products,
        isLoading,
        isError,
    } = useSelector((state) => state.products);
    const [notification, setNotification] = useState(null);

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        setNotification('Item added to the cart');
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };
    /* 
    useEffect(() => {
        dispatch(fetchProductsStart()); // This dispatches the action to initiate the API call
    }, [dispatch]); */

    useEffect(() => {
        dispatch(fetchProducts()); // Dispatch the async thunk
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className='d-flex align-items-center'>
                <strong>Loading...</strong>
                <div
                    className='spinner-border ml-auto '
                    role='status'
                    aria-hidden='true'
                ></div>
            </div>
        );
    }

    if (isError) {
        return <div>Error fetching products</div>;
    }

    const filteredProducts = searchProducts(products, searchQuery);

    return (
        <div>
            <div className='search-container'>
                <h1 className='display-6'>
                    {isBrief ? 'Product Details Page' : 'Product Listing Page'}
                </h1>
                {isBrief ? (
                    ''
                ) : (
                    <SearchBar onSearch={(query) => setSearchQuery(query)} />
                )}
            </div>
            <ProductList
                products={filteredProducts}
                onAddToCart={addToCartHandler}
                isBrief={isBrief}
            />
            {notification && (
                <Notification
                    message={notification}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    );
}

export default Home;
