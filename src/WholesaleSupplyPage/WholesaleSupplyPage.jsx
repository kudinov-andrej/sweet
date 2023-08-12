import React from 'react';
import './WholesaleSupplyPage.css';
import WholesalePageNavigation from './WholesalePageNavigation/WholesalePageNavigation';
import {
    macarons, list, presentation,
    basket, cafe, coffe, hotel,
    kendy, present, retail,
    ball, reviews,
    logoCompani, logoGazProm, logoMetro,
    logoSber, logoVideo, logoZenit,
} from '../constants/wholesalePage/wholesalePage';
import { useFormWithValidation } from '../UseFormValidation/useFormValidation';


function WholesaleSupplyPage({ isLogin }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log({
            "пользовательский ввод": values,
        })
    }
    return (
        <section className="wholesale">
            <WholesalePageNavigation />
            <div className="wholesale__promoting">
                <img className="promoting__img" src={macarons} alt="фотография макаронс" />
                <div className='promoting-information'>
                    <h2 className='promoting-information__title'>Поставки пирожных оптом</h2>
                    <p className='promoting-information__text'>Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях Москвы. Присоединяйтесь! </p>
                    <div className='promoting-information__button-conteiner'>
                        {isLogin
                            ?
                            <a className='promoting-information__link' href={presentation} download>
                                <button className='promoting-information__button'>Презентация</button>
                            </a>
                            :
                            <button className='promoting-information__button'>Презентация</button>}
                        {isLogin
                            ?
                            <a className='promoting-information__link' href={list} download>
                                <button className='promoting-information__button'>Презентация</button>
                            </a>
                            :
                            <button className='promoting-information__button'>Прайс лист</button>}
                    </div>
                    <h3 className='promoting-information__list-title'>Мы предлагаем</h3>
                    <ul className='promoting-information__list'>
                        <li className='promoting-information__punct'>прямые поставки от производителя, всегда свежая продукция; </li>
                        <li className='promoting-information__punct'>ассортимент с высоким средним чеком и маржой; </li>
                        <li className='promoting-information__punct'>бесплатные акриловые шоубоксы для витрины;</li>
                        <li className='promoting-information__punct'>продукцию для дегустации или снижение цены для проведения промо-акций; </li>
                        <li className='promoting-information__punct'>гибкие условия сотрудничества и поставок.  </li>
                    </ul>
                </div>
            </div>
            <div className='wholesale__offers'>
                <h2 className='offers__title'>Что мы можем вам предложить:</h2>
                <ul className='offers__list'>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={present} alt='Изображение подарка' />
                        <p className='offers__item-text'>Корпоративные подарки</p>
                    </li>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={basket} alt='Изображение корзины' />
                        <p className='offers__item-text'>Сотрудничество с интернет магазинами</p>
                    </li>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={cafe} alt='Изображение ресторана' />
                        <p className='offers__item-text'>Сотрудничество с кафе и ресторанами</p>
                    </li>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={coffe} alt='Изображение кофейни' />
                        <p className='offers__item-text'>Сотрудничество с кофейнями</p>
                    </li>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={hotel} alt='Изображение отеля' />
                        <p className='offers__item-text'>Сотрудничество с отелями</p>
                    </li>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={retail} alt='Изображение магазина' />
                        <p className='offers__item-text'>Для Retail</p>
                    </li>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={kendy} alt='Изображение кенди бара' />
                        <p className='offers__item-text'>Кенди бары для мероприятий</p>
                    </li>
                    <li className='offers__item'>
                        <img className='offers__item-img' src={ball} alt='Изображение пирамидки из мячей' />
                        <p className='offers__item-text'>И для других сфер бизнеса</p>
                    </li>
                </ul>
            </div>
            <form className='wholesale__form' onSubmit={handleSubmit} noValidate>
                <h2 className='wholesale__form-title'>Заказать расчёт или отправить запрос на сотрудничество</h2>
                <div className='wholesale__form-conteiner'>
                    <div className='wholesale__form-input-conteiner'>
                        <label className='wholesale__form-label'>Ваше имя*</label>
                        <input className='wholesale__form-input'
                            placeholder='Введите имя'
                            name='wholesaleName'
                            required
                            minLength={2}
                            maxLength={30}
                            value={values.wholesaleName}
                            onChange={handleChange}
                        ></input>
                        <span className='wholesale__form-error'>{errors.wholesaleName}</span>
                    </div>
                    <div className='wholesale__form-input-conteiner'>
                        <label className='wholesale__form-label'>Ваш телефон*</label>
                        <input className='wholesale__form-input'
                            placeholder='+7(9__)*** ** **'
                            name='wholesaleTelephone'
                            required
                            minLength={12}
                            maxLength={12}
                            pattern='^(?:\+7|8)\d{10}$'
                            value={values.wholesaleTelephone}
                            onChange={handleChange}
                        ></input>
                        <span className='wholesale__form-error'>{errors.wholesaleTelephone}</span>
                    </div>
                    <div className='wholesale__form-input-conteiner'>
                        <label className='wholesale__form-label'>Название компании*</label>
                        <input className='wholesale__form-input'
                            placeholder='Введите название компании'
                            name='wholesaleNameCompany'
                            required
                            value={values.wholesaleNameCompany}
                            onChange={handleChange}
                        ></input>
                        <span className='wholesale__form-error'>{errors.wholesaleNameCompany}</span>
                    </div>
                    <div className='wholesale__form-input-conteiner'>
                        <label className='wholesale__form-label'>E-mail*</label>
                        <input className='wholesale__form-input'
                            placeholder='Введите E-mail'
                            name='wholesaleNameEmail'
                            required
                            minLength={5}
                            maxLength={50}
                            pattern="\\w[\\w\\.-]*@\\w[\\w\\.-]*\\.\\w+"
                            value={values.wholesaleNameEmail}
                            onChange={handleChange}
                        ></input>
                        <span className='wholesale__form-error'>{errors.wholesaleNameEmail}</span>
                    </div>
                    <div className='wholesale__form-input-conteiner wholesale__form-input-conteiner_tupy_comment'>
                        <label className='wholesale__form-label'>Добавьте комментарий</label>
                        <textarea rows="5"
                            className='wholesale__form-input wholesale__form-input_tupy_comment'
                            placeholder='Добавьте комментарий'
                            name='wholesaleNameСomment'
                        />
                    </div>
                </div>
                <button type='sabmit'
                    className={!isValid ?
                        'wholesale__form-buttton wholesale__form-buttton_disabled'
                        :
                        'wholesale__form-buttton'}
                    disabled={!isValid}>Заказать расчет</button>
                <p className="wholesale__text-agreement">Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <a className='wholesale__link-agreement' href='#'>Договором оферты</a> и разрешаю обработку моих персональных данных в соответствии с <a className='wholesale__link-agreement' href='#'>Политикой конфиденциальности</a></p>
            </form>
            <div className='wholesale__recommendations'>
                <h2 className='wholesale__recommendations-title'>Нас рекомендуют</h2>
                <ul className='wholesale__recommendations-list'>
                    {reviews.map((post) =>
                        <li className='wholesale__recommendations-item'>
                            <h2 className='recommendations-item__title'>{post.title}</h2>
                            <p className='recommendations-item__text'>{post.review}</p>
                            <div className='recommendations-item__partner-block'>
                                <div className='recommendations-item__partner-text'>
                                    <p className='partner-block__name'>{post.name}</p>
                                    <p className='partner-block__position'>{post.position}</p>
                                </div>
                                <img className='partner-block__icon' src={post.imgUrl} alt="иконка компании"></img>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className='wholesale__logo-conteiner'>
                <img className='wholesale__logo' src={logoGazProm} alt='логотип партнера'></img>
                <img className='wholesale__logo' src={logoMetro} alt='логотип партнера'></img>
                <img className='wholesale__logo' src={logoSber} alt='логотип партнера'></img>
                <img className='wholesale__logo' src={logoVideo} alt='логотип партнера'></img>
                <img className='wholesale__logo' src={logoZenit} alt='логотип партнера'></img>
                <img className='wholesale__logo' src={logoCompani} alt='логотип партнера'></img>
            </div>
        </section >
    );
}

export default WholesaleSupplyPage;