import './App.css';
import React from 'react';
import { corn, hard, car, tg, gh, vk } from './constants/footer/footer.js'
import { NavLink } from 'react-router-dom';

function App() {


    return (
        <footer className="footer">
            <div className='footer__advantage'>
                <div className='footer__advantage-block'>
                    <div className='footer__advantage-item'>
                        <img className='footer__advantage-img' src={hard} alt='Изображение сердца' />
                        <p className='footer__advantage-text'>Готовим вручную и с любовью</p>
                    </div>
                    <div className='footer__advantage-item'>
                        <img className='footer__advantage-img' src={car} alt='Изображение машины' />
                        <p className='footer__advantage-text'>Доставимв день заказа</p>
                    </div>
                    <div className='footer__advantage-item'>
                        <img className='footer__advantage-img' src={corn} alt='Изображение зерна' />
                        <p className='footer__advantage-text'>100% миндальная мукаи натуральные ингредиенты</p>
                    </div>
                </div>
                <p className='footer__copirait'>© 2021 МакароншопООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22
                </p>
            </div>
            <div className='footer__information'>
                <h2 className='footer__information-title'>Информация</h2>
                <nav className='footer__information-navigation'>
                    <NavLink className='footer__information-link' to="">О компании</NavLink>
                    <NavLink className='footer__information-link' to="">Гарантия вкуса и свежести</NavLink>
                    <NavLink className='footer__information-link' to="">Доставка и оплата</NavLink>
                    <NavLink className='footer__information-link' to="">Контакты</NavLink>
                </nav>
            </div>
            <div className='footer__information'>
                <h2 className='footer__information-title'>Каталог</h2>
                <nav className='footer__information-navigation'>
                    <NavLink className='footer__information-link' to="">Каталог десертов</NavLink>
                    <NavLink className='footer__information-link' to="">готовые десерты</NavLink>
                    <NavLink className='footer__information-link' to="">Собрать свой набор</NavLink>
                    <NavLink className='footer__information-link' to="">Акции</NavLink>
                </nav>
            </div>
            <div className='footer__information'>
                <h2 className='footer__information-title'>Для бизнеса</h2>
                <nav className='footer__information-navigation'>
                    <NavLink className='footer__information-link' to="">Корпоративные подарки</NavLink>
                    <NavLink className='footer__information-link' to="">Для юридических лиц</NavLink>
                    <NavLink className='footer__information-link' to="">Оптовикам</NavLink>
                </nav>
            </div>
            <div className='footer__contact'>
                <ul className='footer__navigation'>
                    <li className='footer__link footer__link_typy_phone'>
                        <a className='footer__link-punct footer__link-punct_type_phone' href="tel:+79284702312">+79284702312</a>
                        <p className='footer__link-text'>с 9:00 до 21:00</p>
                    </li>
                </ul>
                <ul className='footer__navigation footer__navigation_typy_icon'>
                    <li className='footer__link'><a className='footer__link-punct' href="https://t.me/+79284702312"><img className='footer__link-img' src={tg} target='blank' alt="Иконка телеграмм" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://vk.com/andreika01"><img className='footer__link-img' src={vk} target='blank' alt="иконка Вконтакте" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://github.com/kudinov-andrej" target='blank'><img className='footer__link-img' src={gh} alt="иконка Гитхаб" /></a></li>
                </ul>
            </div>
        </footer >
    );
}

export default App;
