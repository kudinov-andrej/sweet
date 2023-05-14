import React from 'react';
import '../../App.css';


function CareItem(props) {


    return (
        <div className='care__card'>
            <img className='care__card-img' src={props.careSrc} alt={props.careAlt} />
            <h2 className='care__card-title'>{props.title}</h2>
            <p className='care__card-description'>{props.description}</p>
        </div>
    );
}

export default CareItem;