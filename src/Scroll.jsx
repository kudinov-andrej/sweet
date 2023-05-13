import './App.css';
import React from 'react';


function Scroll(props) {

    return (

        <div className='promotion__scroll-block'>
            <div className={`promotion__scroll promotion__scroll_type_${props.activePoint === 0 ? 'active' : ''}`} />
            <div className={`promotion__scroll promotion__scroll_type_${props.activePoint === 1 ? 'active' : ''}`} />
            <div className={`promotion__scroll promotion__scroll_type_${props.activePoint === 2 ? 'active' : ''}`} />
        </div>

    );
}

export default Scroll;