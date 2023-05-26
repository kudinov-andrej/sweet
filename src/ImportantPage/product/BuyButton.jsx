import React from 'react';
import '../../App.css';


function BuyButton(props) {
    return (
        <button type="button" className='buy-button' onClick={props.onClick}>
            <div className='buy-button__basket-img'></div>
            <p className="buy-button__text">В корзину</p>
        </button>
    );
}

export default BuyButton;