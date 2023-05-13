import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import Header from './header/Header';
import Holidays from './Holidays';
import LoveBlock from './LoveBlock';
import Navigation from './navigation/Navigation';
import Promotion from './promotion/Promotion';
import PopularSet from './popularSet/PopularSet';
import NewsBlock from './news/NewsBlock';

function App() {
  // раскрытие полного списка товаров и новостей в блоках PopularSet и News
  const [openBlock, setOpenBlock] = useState(false);

  function hendleOpenButton() {
    setOpenBlock(!openBlock)
  }

  // скролл в блоке Promotion

  const contentRef = useRef(null);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = contentRef.current.scrollLeft;
      const scrollWidth = contentRef.current.scrollWidth;
      const startPoint = scrollWidth / 7;
      const endPoint = startPoint * 2;

      if (scrollLeft <= startPoint) {
        setActivePoint(0);
      } else if (scrollLeft > startPoint && scrollLeft <= endPoint) {
        setActivePoint(1);
      } else if (scrollLeft > endPoint) {
        setActivePoint(2);
      }
    }
    contentRef.current.addEventListener('scroll', handleScroll, false);
    return () => contentRef.current.removeEventListener('scroll', handleScroll, false);
  }, []);




  return (
    <div className="App">
      < Header />
      <main className='page'>
        <LoveBlock />
        <Navigation />
        <Promotion
          contentRef={contentRef}
          activePoint={activePoint}
        />
        <Holidays />
        <PopularSet
          hendleOpenButton={hendleOpenButton}
          openBlock={openBlock}
        />
        <NewsBlock
          hendleOpenButton={hendleOpenButton}
          openBlock={openBlock}
        />
      </main>
    </div >
  );
}

export default App;
