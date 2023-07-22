import React from 'react';
import '../../App.css';
import BuyButton from '../../ImportantPage/product/BuyButton'

function ProductForBasket(props) {

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

    }

    return (
        <div className='product__card-basket'>
            <img className='product__img-basket' src={props.srcProduct} alt={props.altProduct} />
            <h2 className='product__title-basket'>{props.title}</h2>
            <p className='product__description-basket'>{props.description}</p>
            <div className='product__buy-block-basket'>
                <p className='product__price-basket'>{props.productPrice} руб</p>
                <BuyButton onClick={() => {
                    addToCartInBasket();
                }} />
            </div>
        </div>
    );
}

export default ProductForBasket;