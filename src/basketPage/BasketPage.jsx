import { NavLink } from 'react-router-dom';
import '../App.css';
import ProductList from './ProductList';
import DeliveryImg from '../image/delivery/картинкаМашина.svg';
import DeliveryImgFree from '../image/delivery/картинкаРука.svg';
function BasketPage(props) {

    return (
        <section className='basket'>
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
                </form>
            </div>
        </section >
    );
}

export default BasketPage;
