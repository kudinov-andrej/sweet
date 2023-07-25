import './ProduktPage.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
//import Product from '../product/Product';
import { productsPopular } from '../constants/product/productConst.js';
import BuyButton from '../ImportantPage/product/BuyButton';
import { delivery, pickup, present } from '../constants/produktPage/produktPage';

function ProduktPage(props) {



    const { vendorCode } = useParams();

    const product = productsPopular.find((p) => p.vendorCode === vendorCode);

    const addToCartInBasket = () => {
        props.addToCart({
            id: product.vendorCode,
            title: product.title,
            productPrice: product.productPrice,
            srcProduct: product.srcProduct,
            altProduct: product.altProduct,
            tastes: product.tastes,
            quantity: props.quantity,

        });
        props.setOpenPopupAddGoods(true);
        props.setTitleGoodsForPopup(product.title);
    }


    return (
        <section className="produkt-page">
            <div className='produkt-page__card'>
                <div className='produkt-page__card-gallery'>
                    <img className='card-gallery-img card-gallery-img_typy_big' src={product.srcProduct} alt={product.title}></img>
                    <img className='card-gallery-img' src={product.srcProduct} alt={product.title}></img>
                    <img className='card-gallery-img' src={product.srcProduct} alt={product.title}></img>
                    <img className='card-gallery-img' src={product.srcProduct} alt={product.title}></img>
                </div>
                <div className='produkt-page__card-information'>
                    <h2 className='produkt-page__title'>{product.title}</h2>
                    <p className='produkt-page__description'>{product.description}</p>
                    <ul className='produkt-page__tastes-block'>
                        <h2 className='produkt-page__tastes-title'>Вкусы</h2>
                        {Object.entries(product.tastes).map(([taste, quantity]) => (
                            <li className='produkt-page__tastes-item'>
                                <p className='produkt-page__tastes-name'>{taste}</p>
                                <p className='produkt-page__tastes-quantity'>{quantity}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='produkt-page__buy-block'>
                        <p className='product__price'>{product.productPrice} руб</p>
                        <BuyButton onClick={() => {
                            addToCartInBasket();
                        }} />
                    </div>
                    <div className='produkt-page__advertising-block'>
                        <div className='produkt-page__advertising-item'>
                            <img className='produkt-page__advertising-item-img' src={delivery} alt='Изображение доставки'></img>
                            <p className='produkt-page__advertising-item-text'>Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 2000 руб</p>
                        </div>
                        <div className='produkt-page__advertising-item'>
                            <img className='produkt-page__advertising-item-img' src={pickup} alt='Изображение доставки'></img>
                            <p className='produkt-page__advertising-item-text'>Самовывоз бесплатно.Через 3 часа после оплаты заказа</p>
                        </div>
                        <div className='produkt-page__advertising-item'>
                            <img className='produkt-page__advertising-item-img' src={present} alt='Изображение доставки'></img>
                            <p className='produkt-page__advertising-item-text'>Можем преподнести как анонимный подарок:)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ProduktPage;
