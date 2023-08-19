import './WeddingPage.css';
import React from 'react';
import PageNavigation from '../pageNavigation/PageNavigation';
import PopularSet from '../ImportantPage/popularSet/PopularSet';
import { vaza, list, presentation, weddingMacaronSets, questions } from '../constants/weddingPage/weddingConst';
import BlockPromoting from '../WholesaleSupplyPage/blockPromoting/BlockPromoting';


function WeddingPage(props) {

    return (
        <section className="wedding">
            <PageNavigation
                linkToPage="/wedding"
                textlinkToPage="Предложения для свадьбы"
            />
            <BlockPromoting
                imgUrl={vaza}
                title="Свадебные предложения"
                text="Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества"
                buttonOneText="Презентация"
                fileOne={presentation}
                fileTwo={list}
                buttonTwoText="Прайс лист"
                subtitle="Мы предлагаем"
                list={weddingMacaronSets}
            />
            <PopularSet
                title="Наши свадебные наборы"
                addToCart={props.addToCart}
                hendleOpenButton={props.hendleOpenButton}
                openBlockSet={props.openBlockSet}
                quantity={props.quantity}
                setOpenPopupAddGoods={props.setOpenPopupAddGoods}
                setTitleGoodsForPopup={props.setTitleGoodsForPopup}
                type='wedding'
            />
            <div className='questions'>
                <h2 className='questions__title'>Ответы на вопросы</h2>
                <ul className='questions__list'>
                    {questions.map((item) =>
                        <li className='questions-item'>
                            <h2 className='questions-item__title'>{item.title}</h2>
                            <p className='questions-item__text'>{item.answer}</p>
                        </li>
                    )}
                </ul>
            </div>
        </section >
    );
}

export default WeddingPage;
