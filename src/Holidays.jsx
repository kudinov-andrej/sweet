import './App.css';

import macaronOne from './image/holidays/Макаронс1.png';
import macaronTwo from './image/holidays/Шапка.png';
import macaronThree from './image/holidays/макаронс2.png';
import macaronFore from './image/holidays/макаронс3.png';
import macaronFive from './image/holidays/макаронс4.png';
import macaronSix from './image/holidays/макаронс5.png';
import macaronSeven from './image/holidays/макаронс6.png';


function Holidays() {

    return (
        <section className='holidays'>
            <h2 className='holidays__title'>Ближайшие праздники</h2>
            <div className='holidays__block'>
                <div className='holidays__item holidays__item_type_important'>
                    <img className='holidays__img' src={macaronOne} alt='Желтый макаронс' />
                    <img className='holidays__img holidays__img_type_important' src={macaronTwo} alt='Праздничный колпачок' />
                    <p className='holidays__name'>Скоро День рождения близкого человека </p>
                </div>
                <div className='holidays__item'>
                    <img className='holidays__img' src={macaronThree} alt='Синий макаронс' />
                    <p className='holidays__name'>Скоро готовщина вашей знаменательной даты</p>
                </div>
                <div className='holidays__item'>
                    <img className='holidays__img' src={macaronFore} alt='Розовый макаронс' />
                    <p className='holidays__name'>Скоро хороший день, который стоит отпраздновать</p>
                </div>
                <div className='holidays__item'>
                    <img className='holidays__img' src={macaronFive} alt='Желтый макаронс' />
                    <p className='holidays__name'>Совсем близко день, когда можно себя побаловать</p>
                </div>
                <div className='holidays__item'>
                    <img className='holidays__img' src={macaronSix} alt='Синий макаронс' />
                    <p className='holidays__name'>1 января Новый Год 2023</p>
                </div>
                <div className='holidays__item'>
                    <img className='holidays__img' src={macaronSeven} alt='Розовый макаронс' />
                    <p className='holidays__name'>14 февраля День Святого Валентина</p>
                </div>
            </div>
        </section>
    );
}

export default Holidays;
