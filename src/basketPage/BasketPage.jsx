import React from 'react';
import '../App.css';
import ProductList from './ProductList/ProductList';
import BasketNavigationBlock from './BasketNavigationBlock/BasketNavigationBlock';
import BasketOrderBlock from './BasketOrderBlock/BasketOrderBlock';
import BasketForm from './BasketForm/BasketForm';
import BasketProduct from './BasketProduct/BasketProduct';

function BasketPage(props) {

    return (
        <section className='basket'>
            <div className='basket__buy-block'>
                <BasketNavigationBlock
                    cartItems={props.cartItems}
                    getTotalPrice={props.getTotalPrice}
                    discountsValue={props.discountsValue}
                />
                <div className='basket__buy'>
                    <ProductList
                        cartItems={props.cartItems}
                        quantity={props.quantity}
                        incrementQuantityProductInBasket={props.incrementQuantityProductInBasket}
                        dicrementQuantityProductInBasket={props.dicrementQuantityProductInBasket}
                        getTotalPrice={props.getTotalPrice}
                        addToCart={props.addToCart}
                    />
                    <BasketOrderBlock
                        getTotalPrice={props.getTotalPrice}
                        discountsValue={props.discountsValue}
                        expressDelivery={props.expressDelivery}
                        discountsError={props.discountsError}
                        setDiscountsError={props.setDiscountsError}
                        setDiscountsValue={props.setDiscountsValue}

                    />
                </div>
                <div className='dilivery' id='dilivery'>
                    <h2 className='basket__dilivery-title'>Доставка</h2>
                    <p className='basket__dilivery-subtitle'>Укажите контактные  данные и выберите способ доставки</p>
                    <BasketForm
                        setExpressDelivery={props.setExpressDelivery}
                        cartItems={props.cartItems}
                        expressDelivery={props.expressDelivery}
                        getTotalPrice={props.getTotalPrice}
                        discountsValue={props.discountsValue}
                    />
                </div>
                <BasketProduct
                    handleScrollRight={props.handleScrollRight}
                    handleScrollLeft={props.handleScrollLeft}
                    contentRefBasketPage={props.contentRefBasketPage}
                    addToCart={props.addToCart}
                />
            </div >
        </section >
    );
}

export default BasketPage;
