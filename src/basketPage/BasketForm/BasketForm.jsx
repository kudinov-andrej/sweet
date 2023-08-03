import React from 'react';
import '../../App.css';
import { DatePicker, Select } from 'antd';
import DeliveryImg from '../../image/delivery/картинкаМашина.svg';
import DeliveryImgFree from '../../image/delivery/картинкаРука.svg';
import { useFormWithValidation } from '../../UseFormValidation/useFormValidation';



function BasketForm(props) {
    const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid } = useFormWithValidation();

    let currentDate = new Date();

    // Получаем день, месяц и год из объекта Date
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    // Добавляем ведущий 0, если день или месяц состоят из одной цифры
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // Формируем дату в формате DD-MM-YYYY
    let todayDay = day + "-" + month + "-" + year;

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

    const handleBuySubmit = (evt) => {
        evt.preventDefault();
        console.log({
            "товары": props.cartItems,
            "пользовательский ввод": values,
        })
    }

    return (

        <form className='basket__form-conteiner' onSubmit={handleBuySubmit} noValidate>
            <div className='basket__input-box'>
                <div className='basket__input-conteiner'>
                    <label htmlFor="basket__form-input_typy_name" className='basket__form-label'>Ваше имя*</label>
                    <input type='text'
                        className='basket__form-input basket__form-input_typy_name'
                        id="basket__form-input_typy_name"
                        placeholder='Укажите имя'
                        required minLength={2} maxLength={70}
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    <span className='basket__form-error'>{errors.name}</span>
                </div>
                <div className='basket__input-conteiner'>
                    <label htmlFor="basket__form-input_typy_phone" className='basket__form-label'>Ваш телефон*</label>
                    <input type='tel'
                        className='basket__form-input basket__form-input_typy_phone'
                        id="basket__form-input_typy_phone"
                        placeholder='Введите свой номер телефона'
                        required minLength={11} maxLength={12}
                        name='tel'
                        value={values.tel}
                        onChange={handleChange}
                        pattern='^(?:\+7|8)\d{10}$'
                    />
                    <span className='basket__form-error'>{errors.tel}</span>
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
                <textarea rows="3"
                    className='basket__form-input basket__form-input_typy_address'
                    id="basket__form-input_typy_address"
                    placeholder='Не нужно заполнять при самовывозе'
                    {...(props.expressDelivery ? { required: true } : {})}
                    minLength={20} maxLength={300}
                    name='adress'
                    value={values.adress}
                    onChange={handleChange}
                />
                <span className='basket__form-error'>{errors.adress}</span>
            </div>
            <div className='basket__input-box'>
                <div className='basket__input-conteiner'>
                    <label htmlFor="basket__form-input_typy_date" className='basket__form-label'>Дата получения</label>
                    <DatePicker
                        className='basket__form-input basketform-input_typy_date'
                        id="basket__form-input_typy_date"
                        placeholder='Выберите дату'
                        format="DD-MM-YYYY"
                        onChange={(date, dateString) => {
                            if (dateString >= todayDay.toString()) {
                                setValues({ ...values, day: dateString });
                                setErrors({ ...errors, day: "" });
                                props.setDayError(false);
                            } else {
                                const dayError = 'Выберите корректную дату доставки';
                                setErrors({ ...errors, day: dayError });
                                props.setDayError(true);
                            }
                        }}
                    >
                        <select defaultValue={currentDate}
                            {...(props.expressDelivery ? { required: true } : {})}
                            className='basket__form-input basket__form-input_typy_date'
                        >
                            {dates.map(d => <Option key={d}>{d.toLocaleDateString()}</Option>)}
                        </select>
                    </DatePicker>
                    <span className='basket__form-error'>{errors.day}</span>
                </div>
                <div className='basket__input-conteiner'>
                    <label htmlFor="basket__form-input_typy_time" className='basket__form-label'>Время</label>
                    <select className='basket__form-input basket__form-input_typy_time'
                        id="basket__form-input_typy_time"
                        {...(props.expressDelivery ? { required: true } : {})}
                        name='time'
                        value={values.time}
                        onChange={handleChange}
                    >
                        <option className='basket__form-input_option'>Выберите время получения</option>
                        <option className='basket__form-input_option'>09:00-11:00</option>
                        <option className='basket__form-input_option'>11:00-13:00</option>
                        <option className='basket__form-input_option'>13:00-15:00</option>
                        <option className='basket__form-input_option'>15:00-17:00</option>
                        <option className='basket__form-input_option'>17:00-19:00</option>
                        <option className='basket__form-input_option'>19:00-21:00</option>
                    </select>
                    <span className='basket__form-error'>{errors.time}</span>
                </div>
            </div>
            <div className='basket__input-conteiner'>
                <label htmlFor="basket__form-input_typy_comments" className='basket__form-label'>коментарии</label>
                <textarea rows="5"
                    className='basket__form-input basket__form-input_typy_comments'
                    id="basket__form-input_typy_comments"
                    placeholder='Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое.'
                    name='wish'
                    value={values.wish}
                    onChange={handleChange}
                />
            </div>
            <div className='basket__checkbox-box'>
                <div className='basket__checkbox-conteiner'>
                    <input type='radio'
                        className='basket__form-checkbox basket__form-checkbox_typy_name'
                        id="basket__form-input_typy_pay"
                        name='pay'
                        value="оплата картой онлайн"
                        checked={values.pay === "оплата картой онлайн"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="basket__form-input_typy_pay" className='basket__form-checkbox-label'>Оплата картой онлайн</label>
                </div>
                <div className='basket__checkbox-conteiner'>
                    <input type='radio'
                        className='basket__form-checkbox'
                        id="basket__form-checkbox_typy_cash"
                        name='pay'
                        value="Наличными при получении"
                        checked={values.pay === "Наличными при получении"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="basket__form-checkbox_typy_cash" className='basket__form-checkbox-label'>Наличными при получении</label>
                </div>
                <div className='basket__checkbox-conteiner'>
                    <input type='radio'
                        className='basket__form-checkbox'
                        id="basket__form-checkbox_typy_yandex"
                        name='pay'
                        value="Яндекс деньги"
                        checked={values.pay === "Яндекс деньги"}
                        onChange={handleChange}
                        required />
                    <label htmlFor="basket__form-checkbox_typy_yandex" className='basket__form-checkbox-label'>Яндекс деньги</label>
                </div>
            </div>
            <span className='basket__form-error'>{errors.pay}</span>
            <div className="basket__final-price">
                <p className='basket__final-price-text'>Итоговая сумма заказа вместе с доставкой:</p>
                <p className='basket__final-price-price'>{props.expressDelivery
                    ?
                    props.getTotalPrice() + shippingCostDelivery - props.discountsValue
                    :
                    props.getTotalPrice() - props.discountsValue} руб.</p>
            </div>
            <button type='submit' className={!isValid || props.dayError ? 'button__order-goods button__order-goods_disabled' : 'button__order-goods'} disabled={!isValid || props.dayError} >Оформить заказ</button>
            <p className="basket__text-agreement">Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <a className='basket__link-agreement' href='#'>Договором оферты</a> и разрешаю обработку моих персональных данных в соответствии с <a className='basket__link-agreement' href='#'>Политикой конфиденциальности</a></p>
        </form>

    );
}

export default BasketForm;
