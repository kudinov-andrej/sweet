import './AllSets.css';
import React from 'react';
import PageNavigation from '../pageNavigation/PageNavigation';
import PopularSet from '../ImportantPage/popularSet/PopularSet';
import { holidays } from '../constants/allSets/allSets';

function AllSets(props) {


    const handleClickButton = (item) => {
        props.setIsType(item.type)
        if (props.isType === item.type) {
            props.setIsType("")
        }
    }

    return (
        <section className="all-sets">
            <PageNavigation
                linkToPage="/all-sets"
                textlinkToPage="Готовые наборы"
            />
            <h2 className='all-sets__title'>Готовые наборы</h2>
            <ul className='all-sets__button-list'>
                {holidays.map(item =>
                    <li className='all-sets__button-punkt'>
                        <button type='button'
                            className={props.isType === item.type ? 'all-sets__button all-sets__button-active' : 'all-sets__button'}
                            onClick={() => handleClickButton(item)}
                        >{item.title}</button>
                    </li>
                )}
            </ul>
            <PopularSet
                title="Готовые наборы"
                addToCart={props.addToCart}
                hendleOpenButton={props.hendleOpenButton}
                openBlockSet={props.openBlockSet}
                quantity={props.quantity}
                setOpenPopupAddGoods={props.setOpenPopupAddGoods}
                setTitleGoodsForPopup={props.setTitleGoodsForPopup}
                type={props.isType}
            />
        </section >
    );
}

export default AllSets;