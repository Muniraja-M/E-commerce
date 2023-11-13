// src/redux/productsSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (response.ok) {
      const data = await response.json();
      return data; // Fulfilled action with payload
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    throw new Error(error.message); // Rejected action with error payload
  }
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        isLoading: false,
        isError: null,
    },
    reducers: {
        fetchProductsStart: (state) => {
            state.isLoading = true;
            state.isError = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = null;
        },
        fetchProductsFailure: (state, action) => {
            state.data = [];
            state.isLoading = false;
            state.isError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.data = [];
                state.isLoading = false;
                state.isError = action.error.message;
            });
    },
});

export const {
    fetchProductsSuccess,
    fetchProductsStart,
    fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
