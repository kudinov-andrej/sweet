import './App.css';
import { hardImg } from './constants/love/loveConstants.js'


function LoveBlock() {


    return (
        <section className='love'>
            <div className='love__img'>
                {hardImg.map((punkt, id) =>
                    <div key={punkt.id} className={`love__img-group love__img-group_type_${punkt.type}`}></div>
                )}
            </div>
            <div className='love__block'>
                <div className='love__exlips love__exlips_type_one'></div>
                <div className='love__exlips love__exlips_type_two'></div>
                <div className='love__exlips love__exlips_type_three'></div>
                <div className='love__exlips love__exlips_type_four'></div>
                <h1 className='love__name'>Macaronshop</h1>
                <p className='love__text-name'>Since 2023</p>
                <h2 className='love__title'>Настоящая любовь</h2>
                <p className='love__text'>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
            </div>
        </section>
    );
}

export default LoveBlock;
