import React from 'react';
import '../../App.css';
import Product from '../product/Product'
import { productsPopular } from '../../constants/product/productConst.js'
import PopupAddGoods from '../../Popup/PopupAddGoods';


function PopularSet(props) {


    function hendleOpenClick() {
        props.hendleOpenButton()
    }

    return (
        <>
            <section className="popular-sets">
                <h2 className="popular-sets__title">Популярные наборы</h2>
                <div className={props.openBlockSet ? "popular-sets__block popular-sets__block-open" : "popular-sets__block"}>
                    {productsPopular.map((card, vendorCode) =>
                        < Product
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
                <button onClick={hendleOpenClick} type="button"
                    className='button'>{props.openBlockSet ? "Скрыть наборы" : "Показать все наборы"}
                </button>
            </section>
            <PopupAddGoods />
        </>
    );
}

export default PopularSet;