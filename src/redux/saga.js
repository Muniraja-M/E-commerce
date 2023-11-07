// src/redux/sagas.js

import { put, takeLatest, all } from 'redux-saga/effects';
import {
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductsStart,
} from './productslice';

function* fetchProductsSaga() {
    try {
        // Make an API call to fetch products here using axios or any other HTTP library
        // Replace the URL with your API endpoint
        const response = yield fetch('https://fakestoreapi.com/products');
    
        if (response.ok) {
            const data = yield response.json();
            yield put(fetchProductsSuccess(data));
        } else {
            yield put(fetchProductsFailure('Network response was not ok'));
        }
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* watchFetchProducts() {
    yield takeLatest(fetchProductsStart.type, fetchProductsSaga);
}

export default function* rootSaga() {
    yield all([watchFetchProducts()]);
}
