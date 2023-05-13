import React from 'react';
import '../App.css';


function NewsItem(props) {

    return (
        <div className='news__card'>
            <img className='news__card-img' src={props.srcNews} alt={props.altNews} />
            <p className='news__card-time'>{props.data}</p>
            <h2 className='news__card-title'>{props.title}</h2>
            <p className='news__card-description'>{props.description}</p>
        </div>
    );
}

export default NewsItem;