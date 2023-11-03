import React, { useState } from 'react';
import { useProducts } from '../api';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { searchProducts } from '../utils';
import { addToCart } from '../redux/cartslice';
import Notification from '../components/Notification';

function Home({ isBrief }) {
    const { data: products, isLoading, isError } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch(); // Get the dispatch function
    const [notification, setNotification] = useState(null);

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        setNotification('Item added to the cart');
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching products</div>;
    }

    const filteredProducts = searchProducts(products, searchQuery);

    return (
        <div>
            <div className='search-container'>
                <h1 className='font'>
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
