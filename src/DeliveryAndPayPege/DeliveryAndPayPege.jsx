import React from "react";
import './DeliveryAndPayPege.css';
import DeliveryPageNavigation from './DeliveryPageNavigation/DeliveryPageNavigation';
import { frame, leftWheel, rightWhel, trank, wing, macaronPiece, vector, macaron, map } from '../../src/constants/deliveryAndPayPege/deliveryAndPayPege';
function DeliveryAndPayPege() {


    return (
        <section className="delivery-page">
            <DeliveryPageNavigation />
            <div className="delivery-page__delivery">
                <div className="delivery-img-conteiner">
                    <img className="delivery-img-conteiner-img delivery-img_type_frame" src={frame} alt="рама велосипеда"></img>
                    <img className="delivery-img-conteiner-img delivery-img_type_left-wheel" src={leftWheel} alt="левое колесо"></img>
                    <img className="delivery-img-conteiner-img delivery-img_type_right-wheel" src={rightWhel} alt="правое колесо"></img>
                    <img className="delivery-img-conteiner-img delivery-img_type_wing" src={trank} alt="багажник"></img>
                    <img className="delivery-img-conteiner-img delivery-img_type_trunk" src={wing} alt="крыло"></img>
                </div>
                <div className="delivery-text-conteiner">
                    <h2 className="delivery-text-conteiner__title">Доставка и оплата</h2>
                    <p className="delivery-text-conteiner__text">Для наших покупателей доступны 2 способа доставки: курьерская доставка по Москве в пределах МКАД и самовывоз.</p>
                    <h3 className="delivery-text-conteiner__subtitle">Курьерска доставка:</h3>
                    <p className="delivery-text-conteiner__text">Курьеры работают каждый день с 11 до 21 часа. Доставка макарон осуществляется только по Москве в пределах Московской кольцевой автомобильной дороги (МКАД) Если Вы готовы принять заказ в интервале с 12 до 17 часовили с 17 до 21 часа, то доставка будет стоить 300 рублей. При заказе от 3000 рублей доставка БЕСПЛАТНАЯ. При оформлении заказа до 15 часов возможна доставка в тот же день в промежутке с 17 до 21часа. Курьер предупредит Вас о своём прибытии за 30-40 миут.</p>
                </div>
            </div>
            <div className="delivery-page__self-call">
                <div className="self-call-text-conteiner">
                    <h2 className="self-call-text-conteiner__title">Самовывоз</h2>
                    <p className="self-call-text-conteiner__text">Вы можете сделать заказ и забрать его самостоятельно с нашего производства по адресу: ул. Маршала Тухачевского 22 БЦ "Сова" Заказ необходимо сделать до 20 часов, чтобы забрать его на следующий день в пункте самовывоза в любое удобное время в промежутке с 13 до 22 часов. Оплатить заказ банковской картой можно заранее при оформлении. Непосредственно при получении банковской картой расплатиться нельзя.</p>
                    <h3 className="self-call-text-conteiner__subtitle">Оплата</h3>
                    <p className="self-call-text-conteiner__text">Вы можете оплатить заказ при получении наличными или заранее оплатить заказ банковской картой. Для этого укажите выбранный способ при оформлении заказа. Оплата банковской картой удобна, если вы хотите отправить десерты в подарок или не желаете возиться с наличными при получении заказа. Если у Вас нет карты российского банка, мы можем принять оплату через платёжную систему PayPal.</p>
                </div>
                <div className="self-call-img-conteiner">
                    <img className="self-call-img-conteiner-img self-call-img_type_location" src={vector} alt="знак локации"></img>
                    <img className="self-call-img-conteiner-img self-call-img_type_left-macaron" src={macaron} alt="изображение макаронс"></img>
                    <img className="self-call-img-conteiner-img self-call-img_type_right-piece" src={macaronPiece} alt="кусочек макаронс"></img>
                </div>
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa2907b2b0469bc181ab3e2561a8f222262b41d8467f5aa322006d9917df9a48c&amp;source=constructor" width="100%" height="387" frameborder="0"></iframe>
        </section>
    )
}

export default DeliveryAndPayPege;