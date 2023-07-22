import React from 'react';
import '../../App.css';

function ProductItem(props) {

    const cartItem = props.cartItems.find(item => item.id === props.id);

    function increment() {
        props.addToCart({
            ...cartItem,
            quantity: cartItem.quantity + 1,
        }, props.dicrement);
    }

    function decrement() {
        if (cartItem.quantity > 0) {
            props.addToCart({
                ...cartItem,
                quantity: cartItem.quantity - 1
            }, !props.dicrement);
        }
    }

    return (
        <div className='Goods-list__product-item'>
            <img className='product-item__img' src={props.srcProduct} alt={props.altProduct} />
            <div className='product-item__information'>
                <h2 className='product-item__title'>{props.title}</h2>
                <ul className='product-item__tastes-list'>
                    {Object.keys(props.tastes).map((key) => (
                        <li className='product__tastes-item' key={key}>
                            {key}: {props.tastes[key]}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='product__button-container'>
                <button className='product__button-quantity' onClick={decrement}>-</button>
                <p className='product__quantity'>{cartItem.quantity}</p>
                <button className='product__button-quantity' onClick={increment}>+</button>
            </div>
            <p className='product-price'>Цена: {props.productPrice * cartItem.quantity}</p>
        </div>
    );
}

export default ProductItem;
