import React, { useState } from 'react';
import { useProducts } from '../api';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { searchProducts } from '../utils';
import { addToCart } from '../redux/cartslice';
function Home({ isBrief }) {
    const { data: products, isLoading, isError } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch(); // Get the dispatch function

    const addToCartHandler = (product) => {
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
            <div className='search-container'>
                <h1>Product Listing Page</h1>
                <SearchBar onSearch={(query) => setSearchQuery(query)} />
            </div>
            <ProductList
                products={filteredProducts}
                onAddToCart={addToCartHandler}
                isBrief={isBrief}
            />
        </div>
    );
}

export default Home;
