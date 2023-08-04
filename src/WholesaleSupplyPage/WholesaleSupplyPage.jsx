import React from 'react';
import './WholesaleSupplyPage.css';
import WholesalePageNavigation from './WholesalePageNavigation/WholesalePageNavigation';
import { macarons, list, presentation, basket, cafe, coffe, hotel, kendy, present, retail, ball } from '../constants/wholesalePage/wholesalePage';

function WholesaleSupplyPage({ isLogin }) {



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
        </section>
    );
}

export default WholesaleSupplyPage;