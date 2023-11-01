// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import from "react-query"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles.css';
import store from './redux/store';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));

root.render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </QueryClientProvider>
);
