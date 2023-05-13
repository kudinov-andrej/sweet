import React, { useState } from 'react';
import '../App.css';
import Product from '../product/Product'
import { productsPopular } from '../constants/product/productConst.js'

function PopularSet() {

    const [openBlock, setOpenBlock] = useState(false);

    function hendleOpenButton() {
        setOpenBlock(!openBlock)
    }

    return (
        <section className="popular-sets">
            <h2 className="popular-sets__title">Популярные наборы</h2>
            <div className={openBlock ? "popular-sets__block popular-sets__block-open" : "popular-sets__block"}>
                {productsPopular.map((card, vendorCode) =>
                    < Product
                        key={vendorCode}
                        srcProduct={card.srcProduct}
                        altProduct={card.altProduct}
                        title={card.title}
                        description={card.description}
                        productPrice={card.productPrice}
                    />
                )}

            </div>
            <button onClick={hendleOpenButton} type="button"
                className='button'>{openBlock ? "Скрыть наборы" : "Показать все наборы"}</button>
        </section>
    );
}

export default PopularSet;