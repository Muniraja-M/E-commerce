// Home.js
import React, { useState } from 'react';
import { useProducts } from '../api';
import { useSelector, useDispatch } from 'react-redux'; 
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { searchProducts } from '../utils';

function Home() {
    const { data: products, isLoading, isError } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch(); // Get the dispatch function

    const addToCart = (product) => {
        dispatch(addToCart(product));
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
            <h1>Product Listing Page</h1>
            <SearchBar onSearch={(query) => setSearchQuery(query)} />
            <ProductList products={filteredProducts} onAddToCart={addToCart} />
        </div>
    );
}

export default Home;
