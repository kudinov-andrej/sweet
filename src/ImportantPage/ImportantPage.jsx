import '../App.css';
import React from 'react';
import Holidays from './Holidays';
import LoveBlock from './LoveBlock';
import Navigation from './navigation/Navigation';
import Promotion from './promotion/Promotion';
import PopularSet from './popularSet/PopularSet';
import NewsBlock from './news/NewsBlock';
import CareBlock from './care/CareBlock';


function ImportantPage(props) {



    return (
        <main className='page'>
            <LoveBlock />
            <Navigation />
            <Promotion
                contentRef={props.contentRef}
                activePoint={props.activePoint}
            />
            <Holidays />
            <PopularSet
                addToCart={props.addToCart}
                hendleOpenButton={props.hendleOpenButton}
                openBlockSet={props.openBlockSet}
                quantity={props.quantity}
                setOpenPopupAddGoods={props.setOpenPopupAddGoods}
                setTitleGoodsForPopup={props.setTitleGoodsForPopup}
            />
            <NewsBlock
                hendleOpenButtonNews={props.hendleOpenButtonNews}
                openBlockNews={props.openBlockNews}
            />
            <CareBlock />
        </main>
    );
}

export default ImportantPage;
