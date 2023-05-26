import '../App.css';
import React from 'react';
import HeaderAnimationBlock from './HeaderAnimationBlock';
import HeaderNavigation from './HeaderNavigation';
import HeaderImportentNavigation from './HeaderImportentNavigation';

function Header(cartItems) {


    return (
        <header className='header' >
            <HeaderAnimationBlock />
            <HeaderNavigation
                cartItems={cartItems} />
            <HeaderImportentNavigation />
        </header>
    );
}

export default Header;