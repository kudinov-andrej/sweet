import React from 'react';
import '../../App.css';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useFormWithValidation } from '../../UseFormValidation/useFormValidation';


function BasketOrderBlock(props) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const promocod = [
        { code: 'DISCOUNT500', value: 500 },
        { code: 'DISCOUNT200', value: 200 },
        { code: 'SALE700', value: 700 }
    ];

    const shippingCostDelivery = 400;

    const handlePromoButtonClick = (evt) => {
        evt.preventDefault();
        searchDiscounts(promocod, values)
    }

    const searchDiscounts = (promocod, values) => {
        if (props.getTotalPrice() > 3000) {
            const discount = promocod.find((promo) => promo.code === values.promo);
            if (discount === undefined) {
                props.setDiscountsValue(0);
                props.setDiscountsError("Действие промокода истекло")
                setTimeout(() => {
                    props.setDiscountsError("")
                }, 3000)
            } else {
                props.setDiscountsValue(discount.value);
                props.setDiscountsError("")
            }
        } else {
            props.setDiscountsValue(0);
            props.setDiscountsError("Сумма заказа должна быть больше 3000 рублей")
            setTimeout(() => {
                props.setDiscountsError("")
            }, 3000)
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
                <p className='order-block__form-error'>{props.discountsError}</p>
                <button type='button' className='order-block__form-button' onClick={handleScrollButtonClick}>Оформить заказ</button>
            </form>
        </div>
    );
}

export default BasketOrderBlock;
