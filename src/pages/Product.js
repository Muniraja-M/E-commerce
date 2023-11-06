import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useProducts } from '../api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartslice';
import Notification from '../components/Notification';


function Product() {
    const { id } = useParams(); // Get the product ID from the URL
    const { data: products, isLoading, isError } = useProducts();
    // Find the selected product in the cart based on the product ID
    const dispatch = useDispatch(); // Get the dispatch function
    const [notification, setNotification] = useState(null);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching products</div>;
    }
  

    const selectedProduct = products?.find(
        (product) => product.id === Number(id)
    );

    const addToCartHandler = (selectedProduct) => {
        dispatch(addToCart(selectedProduct));
        setNotification('Item added to the cart');
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };
    console.log("222222",selectedProduct)

    return (
        <div
            className='items-container'
            style={{ }}
        >
            <h1 className='font'>Product Detail Page</h1><br/>
            <h1>{selectedProduct.title}</h1><br/>
            <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className='grid-container'
            /><br/>
            <p><b>Price:</b> ${selectedProduct.price}</p><br/>
            <p><b>Description:</b> {selectedProduct.description}</p><br/>
            <p><b>Rating:</b> {selectedProduct.rating?.rate}</p><br/>
            <p><b>Reviews:</b> {selectedProduct.rating?.count}</p><br/>
            <button
                        className='addCart-button'
                        onClick={() => addToCartHandler(selectedProduct)}
                    >
                        Add to Cart
                    </button>
                    {notification && (
                <Notification
                    message={notification}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    );
}

export default Product;
