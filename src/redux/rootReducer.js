// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import productsReducer from './productslice'; // Import your products slice
import cartReducer from './cartslice';
const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer, // Add other slices here if you have more
});

export default rootReducer;
