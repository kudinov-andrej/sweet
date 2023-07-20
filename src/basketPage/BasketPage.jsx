import { NavLink } from 'react-router-dom';
import '../App.css';
import ProductList from './ProductList';
import { DatePicker, Select } from 'antd';
import DeliveryImg from '../image/delivery/картинкаМашина.svg';
import DeliveryImgFree from '../image/delivery/картинкаРука.svg';
//import { createStyleSheet } from 'jss';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useForm } from '../UseForm';

function BasketPage(props) {
    const { values, setValues, handleChange } = useForm();

    const promocod = [
        { code: 'DISCOUNT500', value: 500 },
        { code: 'DISCOUNT200', value: 200 },
        { code: 'SALE700', value: 700 }
    ];


    const currentDate = new Date();
    const dateMonthLater = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    let dates = [];
    for (let date = currentDate; date <= dateMonthLater; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date));
    }
    const { Option } = Select;

    const handleDeliveryClickOnDelivery = () => {
        props.setExpressDelivery(true);
    }

    const handleDeliveryClickOffDelivery = () => {
        props.setExpressDelivery(false);
    }

    const shippingCostDelivery = 400;

    const handlePromoButtonClick = (evt) => {
        evt.preventDefault();
        searchDiscounts(promocod, values)
    }

    const searchDiscounts = (promocod, values) => {
        if (props.getTotalPrice() > 3000) {
            const discount = promocod.find((promo) => promo.code === values.promo);
            props.setDiscountsValue(discount.value);
        } else {
            props.setDiscountsValue(0);
        }
    }

    const handleScrollButtonClick = (evt) => {
        evt.preventDefault();
        scrollToSection('dilivery');
    }

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 1800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }

    return (
        <section className='basket'>
            <div className='basket__buy-block'>
                <div className='basket__navigation-block'>
                    <nav className='basket__navigation'>
                        <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
                        <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to='/basket' >Корзина</NavLink>
                    </nav>
                    <h2 className='basket__title'>Ваша корзина</h2>

                    <p className='basket__info'>{props.cartItems.length} макаронс /  {props.getTotalPrice() - props.discountsValue} рублей</p>
                </div>
                <div className='basket__buy'>
                    <ProductList
                        cartItems={props.cartItems}
                        quantity={props.quantity}
                        incrementQuantityProductInBasket={props.incrementQuantityProductInBasket}
                        dicrementQuantityProductInBasket={props.dicrementQuantityProductInBasket}
                        getTotalPrice={props.getTotalPrice}
                        addToCart={props.addToCart}
                    />
                    <div className='basket__order-block'>
                        <h2 className='order-block__title'>Итого</h2>
                        <ul className='order-block__info-list'>
                            <li className='order-block__info-punkt'>
                                <p className='info-punkt__text'>Стоимость товаров</p>
                                <p className='info-punkt__price'>{props.getTotalPrice() - props.discountsValue}</p>
                            </li>
                            <li className='order-block__info-punkt'>
                                <p className='info-punkt__text'>Скидка</p>
                                <p className='info-punkt__price'>{props.discountsValue}</p>
                            </li>
                            <li className='order-block__info-punkt'>
                                <p className='info-punkt__text'>Доставка</p>
                                <p className='info-punkt__price'>{props.expressDelivery ? shippingCostDelivery : 0}</p>
                            </li>
                        </ul>
                        <div className='order-block__total-price'>
                            <p className='total-price__text'>К оплате</p>
                            <p className='total-price__price'>{props.expressDelivery
                                ?
                                props.getTotalPrice() + shippingCostDelivery - props.discountsValue
                                :
                                props.getTotalPrice() - props.discountsValue} руб.</p>
                        </div>
                        <form className='order-block__form'>
                            <div className='order-block__form-conteiner'>
                                <p className='order-block__form-text'>Промокод:</p>
                                <div className='order-block__input-conteiner'>
                                    <input type="text"
                                        name='promo'
                                        className='order-block__input'
                                        onChange={handleChange}
                                        value={values.promo}
                                        placeholder='Введите промокод'></input>
                                    <button className='order-block__input-button' onClick={handlePromoButtonClick}>Применить</button>
                                </div>
                            </div>
                            <p className='order-block__form-error'>Ошибка</p>
                            <button type='button' className='order-block__form-button' onClick={handleScrollButtonClick}>Оформить заказ</button>
                        </form>
                    </div>
                </div>
                <div className='dilivery' id='dilivery'>
                    <h2 className='basket__dilivery-title'>Доставка</h2>
                    <p className='basket__dilivery-subtitle'>Укажите контактные  данные и выберите способ доставки</p>
                    <form className='basket__form-conteiner'>
                        <div className='basket__input-box'>
                            <div className='basket__input-conteiner'>
                                <label htmlFor="basket__form-input_typy_name" className='basket__form-label'>Ваше имя*</label>
                                <input type='text' className='basket__form-input basket__form-input_typy_name' id="basket__form-input_typy_name" placeholder='Укажите имя' required minLength={4} maxLength={70} />
                            </div>
                            <div className='basket__input-conteiner'>
                                <label htmlFor="basket__form-input_typy_phone" className='basket__form-label'>Ваш телефон*</label>
                                <input type='tel' className='basket__form-input basket__form-input_typy_phone' id="basket__form-input_typy_phone" placeholder='+7 (___) ___-__-__' required minLength={11} maxLength={11} />
                            </div>
                        </div>
                        <div className='basket__input-box'>
                            <div className='basket__input-conteiner' id="basket__form-input_typy_button">
                                <label htmlFor="basket__form-input_typy_button" className='basket__form-label'>Способ доставки*</label>
                                <button type='button' className={props.expressDelivery ?
                                    'basket__form-button basket__form-button_on'
                                    :
                                    'basket__form-button'} onClick={handleDeliveryClickOnDelivery}>
                                    <img className='basket__form-button-img' src={DeliveryImg} alt='картинка машинки' />
                                    <div className='basket__form-button-info'>
                                        <p className='basket__form-button-text'>Курьерская доставка</p>
                                        <p className='basket__form-button-price'>{shippingCostDelivery} руб.</p>
                                    </div>
                                </button>
                            </div>
                            <button type='button'
                                className={!props.expressDelivery ?
                                    'basket__form-button basket__form-button_tupe_free basket__form-button_on'
                                    :
                                    'basket__form-button basket__form-button_tupe_free'}
                                onClick={handleDeliveryClickOffDelivery}>
                                <img className='basket__form-button-img' src={DeliveryImgFree} alt='#картинка руки' />
                                <div className='basket__form-button-info'>
                                    <p className='basket__form-button-text'>Самовывоз</p>
                                    <p className='basket__form-button-price'>Бесплатно</p>
                                </div>
                            </button>
                        </div>
                        <div className='basket__input-conteiner'>
                            <label htmlFor="basket__form-input_typy_address" className='basket__form-label'>Адрес доставки</label>
                            <textarea rows="3" className='basket__form-input basket__form-input_typy_address' id="basket__form-input_typy_address" placeholder='Не нужно заполнять при самовывозе' required minLength={20} maxLength={180} />
                        </div>
                        <div className='basket__input-box'>
                            <div className='basket__input-conteiner'>
                                <label htmlFor="basket__form-input_typy_date" className='basket__form-label'>Дата получения</label>
                                <DatePicker className='basket__form-input basket__form-input_typy_date' id="basket__form-input_typy_date" placeholder='Выберите дату'>
                                    <select defaultValue={currentDate} className='basket__form-input basket__form-input_typy_date' >
                                        {dates.map(d => <Option key={d}>{d.toLocaleDateString()}</Option>)}
                                    </select>
                                </DatePicker>
                            </div>
                            <div className='basket__input-conteiner'>
                                <label htmlFor="basket__form-input_typy_time" className='basket__form-label'>Время</label>
                                <select className='basket__form-input    basket__form-input_typy_time' id="basket__form-input_typy_time">
                                    <option className='basket__form-input_option'>09:00-11:00</option>
                                    <option className='basket__form-input_option'>11:00-13:00</option>
                                    <option className='basket__form-input_option'>13:00-15:00</option>
                                    <option className='basket__form-input_option'>15:00-17:00</option>
                                    <option className='basket__form-input_option'>17:00-19:00</option>
                                    <option className='basket__form-input_option'>19:00-21:00</option>
                                </select>
                            </div>
                        </div>
                        <div className='basket__input-conteiner'>
                            <label htmlFor="basket__form-input_typy_comments" className='basket__form-label'>коментарии</label>
                            <textarea rows="5" className='basket__form-input basket__form-input_typy_comments' id="basket__form-input_typy_comments" placeholder='Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое.' required minLength={20} maxLength={180} />
                        </div>
                        <div className='basket__checkbox-box'>
                            <div className='basket__checkbox-conteiner'>
                                <input type='checkbox' className='basket__form-checkbox basket__form-checkbox_typy_name' id="basket__form-input_typy_pay" required />
                                <label htmlFor="basket__form-input_typy_pay" className='basket__form-checkbox-label'>Оплата картой онлайн</label>
                            </div>
                            <div className='basket__checkbox-conteiner'>
                                <input type='checkbox' className='basket__form-checkbox' id="basket__form-checkbox_typy_cash" required />
                                <label htmlFor="basket__form-checkbox_typy_cash" className='basket__form-checkbox-label'>Наличными при получении</label>
                            </div>
                            <div className='basket__checkbox-conteiner'>
                                <input type='checkbox' className='basket__form-checkbox' id="basket__form-checkbox_typy_yandex" required />
                                <label htmlFor="basket__form-checkbox_typy_yandex" className='basket__form-checkbox-label'>Яндекс деньги</label>
                            </div>
                        </div>
                        <div className="basket__final-price">
                            <p className='basket__final-price-text'>Итоговая сумма заказа вместе с доставкой:</p>
                            <p className='basket__final-price-price'>{props.expressDelivery
                                ?
                                props.getTotalPrice() + shippingCostDelivery - props.discountsValue
                                :
                                props.getTotalPrice() - props.discountsValue} руб.</p>
                        </div>
                        <button type='submit' className='button__order-goods'>Оформить заказ</button>
                        <p className="basket__text-agreement">Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <a className='basket__link-agreement' href='#'>Договором оферты</a> и разрешаю обработку моих персональных данных в соответствии с <a className='basket__link-agreement' href='#'>Политикой конфиденциальности</a></p>
                    </form>
                </div>
            </div >
        </section >
    );
}

export default BasketPage;
