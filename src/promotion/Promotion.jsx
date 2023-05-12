import '../App.css';
import React, { useRef, useEffect, useState } from 'react';
import { CardPromotion } from '../constants/promotiomConst/promotiomConst.js'
import PromotionCard from './PromotionCard'
import Scroll from '../Scroll';



function Promotion() {

    const contentRef = useRef(null);
    const [activePoint, setActivePoint] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollLeft = contentRef.current.scrollLeft;
            const scrollWidth = contentRef.current.scrollWidth;
            const startPoint = scrollWidth / 7;
            const endPoint = startPoint * 2;

            if (scrollLeft <= startPoint) {
                setActivePoint(0);
            } else if (scrollLeft > startPoint && scrollLeft <= endPoint) {
                setActivePoint(1);
            } else if (scrollLeft > endPoint) {
                setActivePoint(2);
            }
        }
        contentRef.current.addEventListener('scroll', handleScroll, false);
        return () => contentRef.current.removeEventListener('scroll', handleScroll, false);
    }, []);

    return (
        <section className='promotion'>
            <h2 className='promotion__title'>Акция</h2>
            <div className='promotion__block' ref={contentRef} >
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
                activePoint={activePoint}
            />
        </section>
    );
}

export default Promotion;


