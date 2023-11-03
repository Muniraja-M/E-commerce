import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams,
} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Menu from './components/menu/Menu';

function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path={`/productDetail/:id`} element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
