import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useProducts } from '../api';

function Product() {
    const { id } = useParams(); // Get the product ID from the URL
    const { data: products, isLoading, isError } = useProducts();
    // Find the selected product in the cart based on the product ID
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching products</div>;
    }
    console.log('need data--', products);
    console.log('id--', useParams());

    const selectedProduct = products?.find(
        (product) => product.id === Number(id)
    );

    return (
        <div>
            <h1>{selectedProduct.title}</h1>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>Price: ${selectedProduct.price}</p>
            <p>Description: {selectedProduct.description}</p>
            <p>Rating: {selectedProduct.rating?.rate}</p>
            <p>Reviews: {selectedProduct.rating?.count}</p>
        </div>
    );
}

export default Product;
