import React from 'react';
import './GuaranteesPage.css';
import GuaranteesPageNavigation from './GuaranteesPageNavigation/GuaranteesPageNavigation';
import { image1, image2, image3 } from '../constants/guaranteesPage/guaranteesPageConst';

function GuaranteesPage() {



    return (
        <section className="guarantees">
            <GuaranteesPageNavigation />
            <h2 className="guarantees__title">Гарантия вкуса и качества</h2>
            <p className="guarantees__subtitle">При изготовлении пирожных мы
                используем только натуральные ингредиенты,
                избегая использования конвер </p>
            <div className="guarantees__list">
                <div className="guarantees__item">
                    <img className="guarantees__item-img" src={image1} alt="тзображение гарантии"></img>
                    <p className="guarantees__item-text">100%</p>
                    <p className="guarantees__item-text">миндальная мука</p>
                </div>
                <div className="guarantees__item">
                    <img className="guarantees__item-img" src={image2} alt="тзображение гарантии"></img>
                    <p className="guarantees__item-text">100%</p>
                    <p className="guarantees__item-text">безопасные пищевые красители</p>
                </div>
                <div className="guarantees__item">
                    <img className="guarantees__item-img" src={image3} alt="тзображение гарантии"></img>
                    <p className="guarantees__item-text">100%</p>
                    <p className="guarantees__item-text">фруктовые пюре и натруральные ингредиенты</p>
                </div>
            </div>
        </section>
    );
}

export default GuaranteesPage;