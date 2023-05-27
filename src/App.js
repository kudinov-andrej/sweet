import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import Header from './header/Header';
import ImportantPage from './ImportantPage/ImportantPage';
import Footer from "./Footer";
import BasketPage from "./basketPage/BasketPage";
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        if (contentRef.current) { // добавляем проверку
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
      }
      if (contentRef.current) { // добавляем проверку
        contentRef.current.addEventListener('scroll', handleScroll, false);
      }
      return () => {
        if (contentRef.current) { // добавляем проверку
          contentRef.current.removeEventListener('scroll', handleScroll, false);
        }
      };
    }
  }, [location.pathname]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, dicrement) => {
    // проверяем, coесть ли уже такой товар в корзине
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      // если товар уже есть - увеличиваем его количество на 1
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id && dicrement) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        } else if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
    }
    else {
      // если такого товара еще нет - добавляем его в корзину
      setCartItems([...cartItems, product]);

    }
  }

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  function getTotalPrice() {
    const newTotalPrice = cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
    setTotalPrice(newTotalPrice);
    return newTotalPrice;
  }

  useEffect(() => {
    getTotalPrice()
  }, [cartItems, quantity])


  function incrementQuantityProductInBasket() {
    setQuantity(quantity + 1)
  }

  function dicrementQuantityProductInBasket() {
    setQuantity(quantity - 1)

  }



  return (
    <div className="App">
      < Header
        cartItems={cartItems}
      />
      <Routes>
        <Route exact path="/"
          element={<ImportantPage
            contentRef={contentRef}
            activePoint={activePoint}
            hendleOpenButton={hendleOpenButton}
            openBlockSet={openBlockSet}
            hendleOpenButtonNews={hendleOpenButtonNews}
            openBlockNews={openBlockNews}
            quantity={quantity}
            addToCart={addToCart}
          />}
        />
        <Route path="/basket"
          element={<BasketPage
            cartItems={cartItems}
            quantity={quantity}
            incrementQuantityProductInBasket={incrementQuantityProductInBasket}
            dicrementQuantityProductInBasket={dicrementQuantityProductInBasket}
            getTotalPrice={getTotalPrice}
            addToCart={addToCart}
          />}
        />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
