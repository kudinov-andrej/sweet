import React from 'react';
import '../App.css';
import NewsItem from '../news/NewsItem'
import { news } from '../constants/news/newsConst.js'


function NewsBlock(props) {


    function hendleOpenClick() {
        props.hendleOpenButton()
    }

    return (
        <section className="news">
            <h2 className="news__title">Новости</h2>
            <div className={props.openBlock ? "news__block news__block-open" : "news__block"}>
                {news.map((news, id) =>
                    < NewsItem
                        key={id}
                        srcNews={news.srcNews}
                        altNews={news.altNews}
                        title={news.title}
                        description={news.description}
                        data={news.data}
                    />
                )}
            </div>
            <button onClick={hendleOpenClick} type="button"
                className='button'>{props.openBlock ? "Скрыть новости" : "Показать все новости"}</button>
        </section>
    );
}

export default NewsBlock;