import { NavLink } from 'react-router-dom';
import '../App.css';
import ProductList from './ProductList';
import { DatePicker, Select } from 'antd';
import DeliveryImg from '../image/delivery/картинкаМашина.svg';
import DeliveryImgFree from '../image/delivery/картинкаРука.svg';
//import { createStyleSheet } from 'jss';



function BasketPage(props) {

    const currentDate = new Date();
    const dateMonthLater = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    let dates = [];
    for (let date = currentDate; date <= dateMonthLater; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date));
    }
    const { Option } = Select;

    return (
        <section className='basket'>
            <div className='basket__buy-block'>
                <div className='basket__navigation-block'>
                    <nav className='basket__navigation'>
                        <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
                        <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to='/basket' >Корзина</NavLink>
                    </nav>
                    <h2 className='basket__title'>Ваша корзина</h2>

                    <p className='basket__info'>{props.cartItems.length} макаронс /  {props.getTotalPrice()} рублей</p>
                </div>
                <ProductList
                    cartItems={props.cartItems}
                    quantity={props.quantity}
                    incrementQuantityProductInBasket={props.incrementQuantityProductInBasket}
                    dicrementQuantityProductInBasket={props.dicrementQuantityProductInBasket}
                    getTotalPrice={props.getTotalPrice}
                    addToCart={props.addToCart}
                />
                <div className='dilivery'>
                    <h2 className='basket__dilivery-title'>Доставка</h2>
                    <p className='basket__dilivery-subtitle'>Укажите контактные  данные и выберите способ доставки</p>
                    <form className='basket__form-conteiner'>
                        <div className='basket__input-box'>
                            <div className='basket__input-conteiner'>
                                <label for="basket__form-input_typy_name" className='basket__form-label'>Ваше имя*</label>
                                <input type='text' className='basket__form-input basket__form-input_typy_name' id="basket__form-input_typy_name" placeholder='Укажите имя' required minLength={4} maxLength={70} />
                            </div>
                            <div className='basket__input-conteiner'>
                                <label for="basket__form-input_typy_phone" className='basket__form-label'>Ваш телефон*</label>
                                <input type='tel' className='basket__form-input basket__form-input_typy_phone' id="basket__form-input_typy_phone" placeholder='+7 (___) ___-__-__' required minLength={11} maxLength={11} />
                            </div>
                        </div>
                        <div className='basket__input-box'>
                            <div className='basket__input-conteiner' id="basket__form-input_typy_button">
                                <label for="basket__form-input_typy_button" className='basket__form-label'>Способ доставки*</label>
                                <button type='button' className='basket__form-button'>
                                    <img className='basket__form-button-img' src={DeliveryImg} alt='картинка машинки' />
                                    <div className='basket__form-button-info'>
                                        <p className='basket__form-button-text'>Курьерская доставка</p>
                                        <p className='basket__form-button-price'>400 руб.</p>
                                    </div>
                                </button>
                            </div>
                            <button type='button' className='basket__form-button basket__form-button_tupe_free'>
                                <img className='basket__form-button-img' src={DeliveryImgFree} alt='#картинка руки' />
                                <div className='basket__form-button-info'>
                                    <p className='basket__form-button-text'>Самовывоз</p>
                                    <p className='basket__form-button-price'>Бесплатно</p>
                                </div>
                            </button>
                        </div>
                        <div className='basket__input-conteiner'>
                            <label for="basket__form-input_typy_address" className='basket__form-label'>Адрес доставки</label>
                            <textarea rows="3" className='basket__form-input basket__form-input_typy_address' id="basket__form-input_typy_address" placeholder='Не нужно заполнять при самовывозе' required minLength={20} maxLength={180} />
                        </div>
                        <div className='basket__input-box'>
                            <div className='basket__input-conteiner'>
                                <label for="basket__form-input_typy_date" className='basket__form-label'>Дата получения</label>
                                <DatePicker className='basket__form-input basket__form-input_typy_date' id="basket__form-input_typy_date" placeholder='Выберите дату'>
                                    <select defaultValue={currentDate} className='basket__form-input basket__form-input_typy_date' >
                                        {dates.map(d => <Option key={d}>{d.toLocaleDateString()}</Option>)}
                                    </select>
                                </DatePicker>
                            </div>
                            <div className='basket__input-conteiner'>
                                <label for="basket__form-input_typy_time" className='basket__form-label'>Время</label>
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
                            <label for="basket__form-input_typy_comments" className='basket__form-label'>коментарии</label>
                            <textarea rows="5" className='basket__form-input basket__form-input_typy_comments' id="basket__form-input_typy_comments" placeholder='Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое.' required minLength={20} maxLength={180} />
                        </div>
                        <div className='basket__input-box'>
                            <div className='basket__checkbox-conteiner'>
                                <label for="basket__form-input_typy_checkbox" className='basket__form-checkbox'>Оплата картой онлайн</label>
                                <input type='checkbox' className='basket__form-checkbox basket__form-checkbox_typy_name' id="basket__form-checkbox_typy_name" required />
                            </div>
                            <div className='basket__checkbox-conteiner'>
                                <label for="basket__form-checkbox_typy_phone" className='basket__form-checkbox'>Наличными при получении</label>
                                <input type='checkbox' className='basket__form-checkbox ' id="basket__form-checkbox_typy_phone" required />
                            </div>
                            <div className='basket__checkbox-conteiner'>
                                <label for="basket__form-checkbox_typy_phone" className='basket__form-checkbox'>Яндекс деньги</label>
                                <input type='checkbox' className='basket__form-checkbox' id="basket__form-checkbox_typy_phone" required />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
}

export default BasketPage;
