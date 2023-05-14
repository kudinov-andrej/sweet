import '../../App.css';
import React from 'react';
import { CardPromotion } from '../../constants/promotiomConst/promotiomConst.js'
import PromotionCard from './PromotionCard'
import Scroll from '../Scroll';



function Promotion(props) {


    return (
        <section className='promotion'>
            <h2 className='promotion__title'>Акция</h2>
            <div className='promotion__block' ref={props.contentRef} >
                {CardPromotion.map((card, id) =>
                    <PromotionCard
                        key={card.id}
                        cardSrc={card.cardSrc}
                        cardAlt={card.cardAlt}
                        cardName={card.cardName}
                        text={card.text}
                    />
                )}
            </div>
            <Scroll
                activePoint={props.activePoint}
            />
        </section>
    );
}

export default Promotion;


