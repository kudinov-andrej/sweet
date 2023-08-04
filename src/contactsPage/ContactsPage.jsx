import React from "react";
import './ContactsPage.css'
import { location, macaron } from '../constants/contactsPage/contactsPage';
import ContactsPageNavigation from '../contactsPage/ContactsPageNavigation/ContactsPageNavigation';

function ContactsPage() {


    return (
        <section className="contacts-page">
            <ContactsPageNavigation />
            <div className="contacts">
                <div className="contacts-img__conteiner">
                    <img className="contacts-img contacts-img_type_location" src={location} alt="Изображение значка локации"></img>
                    <img className="contacts-img contacts-img_type_macaron" src={macaron} alt="изображение макаронс"></img>
                </div>
                <div className="contacts-text__conteiner">
                    <h2 className="contacts-text__title">Контакты</h2>
                    <h3 className="contacts-text__subtitle">Произвлодство</h3>
                    <p className="contacts-text__text">Красная площадь, дом 1.</p>
                    <p className="contacts-text__text">Время работы: с 8 до 19:30.</p>
                    <h3 className="contacts-text__subtitle">Пункты Самовывоза:</h3>
                    <p className="contacts-text__text">Кафе “Морошка”. Маршала Тухачевского, 22 (с 8 до 19:30)</p>
                    <p className="contacts-text__text">Кафе “Мята”. Наб канала Грибоедова, 37 (с 10 до 22)</p>
                    <h3 className="contacts-text__subtitle">Телефоны:</h3>
                    <p className="contacts-text__text">8 (812) 309-82-88 основной номер</p>
                    <p className="contacts-text__text">8 (981) 841-85-25 для жалоб и предложений</p>
                </div>
            </div>
        </section>
    );
}

export default ContactsPage;