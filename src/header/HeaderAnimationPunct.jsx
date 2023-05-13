import '../App.css';
import React from 'react';


function HeaderAnimationPunct(props) {


    return (
        <div className={`animation-punkt ${props.isActive ? 'animation-punkt_active' : ''}`}>
            <div className={`animation-punkt__backgraund animation-punkt__backgraund_type_${props.type}`} ></div>
            <p className='animation-punkt__text'>{props.text}</p>
        </div>

    );
}

export default HeaderAnimationPunct;