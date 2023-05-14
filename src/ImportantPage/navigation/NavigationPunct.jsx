import '../../App.css';
import { Link } from 'react-router-dom';
import React from 'react';



function NavigationPunct(props) {

    return (
        <li className={`navigation__punkt navigation__punkt_type_${props.type}`}>
            <Link to={props.link} className='navigation__punkt-link'>
                <div className={`navigation__punkt-img navigation__punkt-img_type_${props.typeImg}`}></div>
                <h2 className='navigation__punkt-title'>{props.title}</h2>
                <p className='navigation__punkt-text'>{props.text}</p>
            </Link>
        </li>


    );
}

export default NavigationPunct;
