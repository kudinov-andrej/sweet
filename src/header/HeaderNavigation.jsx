import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavigation(props) {

    const cartItems = props.cartItems || { cartItems: [] };
    return (
        <nav className='header__navigation'>
            <ul className='header__navigation-block'>
                <NavLink to="/guarantees" className={({ isActive }) => `header__navigation-link ${isActive ? 'header__navigation-link-active' : ''}`}>Гарантия свежести</NavLink>
                <NavLink to="/delivery-and-pay" className={({ isActive }) => `header__navigation-link ${isActive ? 'header__navigation-link-active' : ''}`}>Доставка и оплата</NavLink>
                <NavLink to="/wholesale-supply" className={({ isActive }) => `header__navigation-link ${isActive ? 'header__navigation-link-active' : ''}`}>Оптовые поставки</NavLink>
                <NavLink to="/contacts" className={({ isActive }) => `header__navigation-link ${isActive ? 'header__navigation-link-active' : ''}`}>Контакты</NavLink>
            </ul>
            <div className='header__location-block'>
                <div className='header__location-img'></div>
                <p className='header__location-name'>Москва</p>
            </div>
            <div className='header__phone'>
                <div className='header__phone-img'></div>
                <p className='header__phone-name'>8-928-470-23-12</p>
            </div>
            <NavLink className='header__navigation-basket' to='/basket'>
                <div className='header__basket'>
                    <div className='header__basket-img'>
                        <p className='header__basket-quantity'>{cartItems.cartItems.length}</p>
                    </div>
                    <p className='header__basket-name'>В корзине( {cartItems.cartItems.length} макаронс)</p>
                </div>
            </NavLink>
            <ul className='header__sotial-block'>
                <li className='header__sotial-link header__sotial-link_type_tg'></li>
                <li className='header__sotial-link header__sotial-link_type_vk'></li>
                <li className='header__sotial-link header__sotial-link_type_ok'></li>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;
