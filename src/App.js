import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import Header from './header/Header';
import ImportantPage from './ImportantPage/ImportantPage';
import Footer from "./Footer"

import { Route, Routes } from "react-router-dom";

function App() {
  // раскрытие полного списка товаров и новостей в блоках PopularSet и News
  const [openBlockSet, setOpenBlockSet] = useState(false);
  const [openBlockNews, setOpenBlockNews] = useState(false);

  function hendleOpenButton() {
    setOpenBlockSet(!openBlockSet)
  }
  function hendleOpenButtonNews() {
    setOpenBlockNews(!openBlockNews)
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
      <Routes>
        <Route path="/"
          element={<ImportantPage
            contentRef={contentRef}
            activePoint={activePoint}
            hendleOpenButton={hendleOpenButton}
            openBlockSet={openBlockSet}
            hendleOpenButtonNews={hendleOpenButtonNews}
            openBlockNews={openBlockNews}
          />}
        />

      </Routes>
      <Footer />
    </div >
  );
}

export default App;
