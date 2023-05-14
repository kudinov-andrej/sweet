import React from 'react';
import '../../App.css';


function BuyButton(props) {

    return (

        <button type="button" className='buy-button'>
            <div className='buy-button__basket-img'></div>
            <p className="buy-button__text">В корзину</p>
        </button>

    );
}

export default BuyButton;