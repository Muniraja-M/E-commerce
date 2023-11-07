// src/redux/productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

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
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
