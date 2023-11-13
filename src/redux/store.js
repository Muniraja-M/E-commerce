import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Import your rootReducer
import rootSaga from './saga'; // Import your rootSaga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    //middleware: [sagaMiddleware],
});

//sagaMiddleware.run(rootSaga);

export default store;
