import React from 'react';
import '../../App.css';
import ProductForBasket from '../ProductForBasket/ProductForBasket';
import { productsPopular } from '../../constants/product/productConst';

function BasketProduct(props) {

    const handleScrollRightButtonClick = () => {
        props.handleScrollRight();
    };

    const handleScrollLeftButtonClick = () => {
        props.handleScrollLeft();
    };

    return (

        <section className="basket__product">
            <h2 className='basket__product-title'>Добавить в заказ</h2>
            <div className='basket__product-conteiner'>
                <button className='product-conteiner__button product-conteiner__button_type_left'
                    onClick={handleScrollLeftButtonClick}
                >&larr;</button>
                <div className='basket__product-items' ref={props.contentRefBasketPage}>
                    {productsPopular.map((card, vendorCode) =>
                        < ProductForBasket
                            key={vendorCode}
                            vendorCode={card.vendorCode}
                            addToCart={props.addToCart}
                            srcProduct={card.srcProduct}
                            altProduct={card.altProduct}
                            title={card.title}
                            description={card.description}
                            productPrice={card.productPrice}
                            tastes={card.tastes}
                            quantity={props.quantity}
                            setOpenPopupAddGoods={props.setOpenPopupAddGoods}
                            setTitleGoodsForPopup={props.setTitleGoodsForPopup}
                        />
                    )}
                </div>
                <button className='product-conteiner__button product-conteiner__button_type_right'
                    onClick={handleScrollRightButtonClick}
                >&rarr;</button>
            </div>
        </section>

    );
}

export default BasketProduct;
