import { NavLink } from 'react-router-dom';
import { SCREENS } from '../../constants/appConstants';
import { Fragment } from 'react';

const { PRODUCT_DETAILS_PATH, PRODUCT_LIST_PATH, CART_PATH } = SCREENS;
const menuLists = [
    { id: crypto.randomUUID(), name: 'ProductLists', to: PRODUCT_DETAILS_PATH },
    { id: crypto.randomUUID(), name: 'ProductDetail', to: PRODUCT_LIST_PATH },
    { id: crypto.randomUUID(), name: 'Cart', to: CART_PATH },
];
const Menu = () => {
    return (
        <div className='menu'>
            {menuLists.map(({ id, name, to }) => {
                return (
                    <NavLink
                        key={id}
                        to={to}
                        className={({ isActive }) =>
                            isActive ? 'active' : 'disactive'
                        }
                    >
                        {name}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default Menu;
