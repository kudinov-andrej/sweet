//import React from 'react';
import '../../App.css';
import BuyButton from './BuyButton';
import { Link } from 'react-router-dom';

function Product(props) {

    const addToCartInBasket = () => {
        props.addToCart({
            id: props.vendorCode,
            title: props.title,
            productPrice: props.productPrice,
            srcProduct: props.srcProduct,
            altProduct: props.altProduct,
            tastes: props.tastes,
            quantity: props.quantity,

        });
        props.setOpenPopupAddGoods(true);
        props.setTitleGoodsForPopup(props.title);
    }


    return (
        <div className='product__card'>
            <Link className='product__card-link' key={props.vendorCode} to={`/popular-sets/${props.vendorCode}`}>
                <img className='product__img' src={props.srcProduct} alt={props.altProduct} />
                <h2 className='product__title'>{props.title}</h2>
                <p className='product__description'>{props.description}</p>
            </Link>
            <div className='product__buy-block'>
                <p className='product__price'>{props.productPrice} руб</p>
                <BuyButton onClick={() => {
                    addToCartInBasket();
                }} />
            </div>
        </div>
    );
}

export default Product;