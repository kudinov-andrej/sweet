import React from 'react';
import './PopupAddGoods.css';


function PopupAddGoods(props) {

    return (
        <div className={props.openPopupAddGoods ? 'popup popup-open' : 'popup'} onClick={props.handlePopupCloseClick}>
            <div className='popup__conteiner'>
                <button type='button' className='popup__button-close' onClick={props.closeAllPopups}></button>
                <h2 className='popup__title'>Товар добавлен в корзину</h2>
                <p className='popup__subtitle'>Набор {props.titleGoodsForPopup} добавлен в корзину.</p>
                <div className='popup__button-conteiner'>
                    <button type='button' className='popup__button popup__button_type_continue' onClick={props.closeAllPopups}>Продолжить покупки</button>
                    <button type='button' className='popup__button popup__button_type_go-basket' onClick={props.closePopupAddGoodsAndNavigate}>Оформить сейчас</button>
                </div>
            </div>
        </div>
    );
}

export default PopupAddGoods;
