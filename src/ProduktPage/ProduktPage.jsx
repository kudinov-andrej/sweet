import './ProduktPage.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { productsPopular } from '../constants/product/productConst.js';
import BuyButton from '../ImportantPage/product/BuyButton';
import { delivery, pickup, present } from '../constants/produktPage/produktPage';
import BasketProduct from '../basketPage/BasketProduct/BasketProduct';
import ProduktPageNavigation from './ProduktPageNavigation/ProduktPageNavigation';

function ProduktPage(props) {

    const { aboutProduktInformation, setAboutProduktInformation } = props;
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
            <ProduktPageNavigation
                vendorCode={product.vendorCode}
            />
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
            <div className="produkt-page__information">
                <nav className="produkt-page__navigation">
                    <ul className='produkt-page__navigation-list'>
                        <li className="produkt-page__navigation-punkt">
                            <button className={aboutProduktInformation === "description"
                                ?
                                "produkt-page__navigation-punkt-button produkt-page__navigation-punkt-button-active"
                                :
                                "produkt-page__navigation-punkt-button"}
                                onClick={() => setAboutProduktInformation("description")}
                            >
                                Описание
                            </button>
                        </li>
                        <li className="produkt-page__navigation-punkt">
                            <button className={aboutProduktInformation === "compound"
                                ?
                                "produkt-page__navigation-punkt-button produkt-page__navigation-punkt-button-active"
                                :
                                "produkt-page__navigation-punkt-button"}
                                onClick={() => setAboutProduktInformation("compound")}
                            >
                                Состав и пищевая ценность
                            </button>
                        </li>
                        <li className="produkt-page__navigation-punkt">
                            <button className={aboutProduktInformation === "storageCondition"
                                ?
                                "produkt-page__navigation-punkt-button produkt-page__navigation-punkt-button-active"
                                :
                                "produkt-page__navigation-punkt-button"}
                                onClick={() => setAboutProduktInformation("storageCondition")}
                            >
                                Условия и сроки хранения
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="produkt-page__about-product">
                    <div className={aboutProduktInformation === "description"
                        ?
                        "about-product__description-active"
                        :
                        "about-product__description"}>
                        <p className="about-product__description-text">{product.detailedDescription}</p>
                    </div>
                    <div className={aboutProduktInformation === "compound"
                        ?
                        "about-product__description-active"
                        :
                        "about-product__description"}>
                        <p className="about-product__description-text">{product.compound}</p>
                    </div>
                    <div className={aboutProduktInformation === "storageCondition"
                        ?
                        "about-product__description-active"
                        :
                        "about-product__description"}>
                        <p className="about-product__description-text">{product.storageCondition}</p>
                    </div>
                </div>
            </div>
            <div className='produkt-page__add-produkt'>
                <BasketProduct
                    handleScrollRight={props.handleScrollRight}
                    handleScrollLeft={props.handleScrollLeft}
                    contentRefBasketPage={props.contentRefBasketPage}
                    addToCart={props.addToCart}
                    quantity={props.quantity}
                    setOpenPopupAddGoods={props.setOpenPopupAddGoods}
                    setTitleGoodsForPopup={props.setTitleGoodsForPopup}
                    titleBlock={props.titleBlock}
                />
            </div>
        </section >
    );
}

export default ProduktPage;
