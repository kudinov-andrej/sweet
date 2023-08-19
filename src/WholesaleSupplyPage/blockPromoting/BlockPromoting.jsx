import React from 'react';
import './BlockPromoting.css';



function BlockPromoting({ isLogin, list, subtitle, buttonTwoText, fileTwo, buttonOneText, fileOne, text, title, imgUrl, }) {

    return (
        <div className="promoting">
            <img className="promoting__img" src={imgUrl} alt="фотография макаронс" />
            <div className='promoting-information'>
                <h2 className='promoting-information__title'>{title}</h2>
                <p className='promoting-information__text'>{text}</p>
                <div className='promoting-information__button-conteiner'>
                    {isLogin
                        ?
                        <a className='promoting-information__link' href={fileOne} download>
                            <button className='promoting-information__button'>{buttonOneText}</button>
                        </a>
                        :
                        <button className='promoting-information__button'>{buttonOneText}</button>}
                    {isLogin
                        ?
                        <a className='promoting-information__link' href={fileTwo} download>
                            <button className='promoting-information__button'>{buttonTwoText}</button>
                        </a>
                        :
                        <button className='promoting-information__button'>{buttonTwoText}</button>}
                </div>
                <h3 className='promoting-information__list-title'>{subtitle}</h3>
                <ul className='promoting-information__list'>
                    {list.map(item =>
                        <li className='promoting-information__punct'>{item.title}</li>
                    )}
                </ul>

            </div>
        </div>
    )
}


export default BlockPromoting;