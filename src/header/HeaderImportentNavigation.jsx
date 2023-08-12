import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderImportentNavigation() {
    return (
        <nav className='header__importent-navigation'>
            <ul className='header__importent-navigation-block'>
                <li className='header__importent-navigation-link'>СЛАДКИЕ ДНИ <span className='importent-navigation-link__discount'>%</span></li>
                <li className='header__importent-navigation-link'>подарочные наборы</li>
                <li className='header__importent-navigation-link'>Собрать набор</li>
            </ul>
            <NavLink to="/" className="header__logo-link"><div className='header__logo'></div></NavLink>
            <ul className='header__importent-navigation-block'>
                <li className='header__importent-navigation-link'>Создать дизайн</li>
                <li className='header__importent-navigation-link'>КОМПАНИЯМ</li>
                <li className='header__importent-navigation-link'>ВЕСЬ КАТАЛОГ</li>
            </ul>
        </nav>
    );
}

export default HeaderImportentNavigation;