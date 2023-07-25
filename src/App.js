import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import Header from './header/Header';
import ImportantPage from './ImportantPage/ImportantPage';
import Footer from "./Footer";
import BasketPage from "./basketPage/BasketPage";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import PopupAddGoods from './Popup/PopupAddGoods';
import ProduktPage from './ProduktPage/ProduktPage'

function App() {
  // раскрытие полного списка товаров и новостей в блоках PopularSet и News
  const [openBlockSet, setOpenBlockSet] = useState(false);
  const [openBlockNews, setOpenBlockNews] = useState(false);
  // устанавливаем скидку по промокоду 
  const [discountsValue, setDiscountsValue] = useState(0);
  const [discountsError, setDiscountsError] = useState("");
  const [openPopupAddGoods, setOpenPopupAddGoods] = useState(false);
  const [titleGoodsForPopup, setTitleGoodsForPopup] = useState("");
  const [dayError, setDayError] = useState(true);

  function hendleOpenButton() {
    setOpenBlockSet(!openBlockSet)
  }
  function hendleOpenButtonNews() {
    setOpenBlockNews(!openBlockNews)
  }
  const navigate = useNavigate();
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


  // скролл в блоке Basket

  const contentRefBasketPage = useRef(null);

  const handleScrollRight = () => {
    if (contentRefBasketPage.current) {
      const remainingWidth = contentRefBasketPage.current.scrollWidth - contentRefBasketPage.current.offsetWidth - contentRefBasketPage.current.scrollLeft;
      const scrollAmount = Math.min(300, remainingWidth);
      contentRefBasketPage.current.scrollLeft += scrollAmount;
    }
  };

  const handleScrollLeft = () => {
    if (contentRefBasketPage.current) {
      const scrollAmount = Math.min(300, contentRefBasketPage.current.scrollLeft);
      contentRefBasketPage.current.scrollLeft -= scrollAmount;
    }
  };

  useEffect(() => {
    if (location.pathname === '/basket') {
      if (contentRefBasketPage.current) {
        contentRefBasketPage.current.addEventListener('scroll', handleScrollRight, false);
        contentRefBasketPage.current.addEventListener('scroll', handleScrollLeft, false);
      }
    }
    return () => {
      if (contentRefBasketPage.current) {
        contentRefBasketPage.current.removeEventListener('scroll', handleScrollRight, false);
        contentRefBasketPage.current.removeEventListener('scroll', handleScrollLeft, false);
      }
    };
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
  // стейт для хранение стоимости товаров в корзине
  const [totalPrice, setTotalPrice] = useState(0);
  // стейт для учета стоимости доставки
  const [expressDelivery, setExpressDelivery] = useState(false);

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

  // закрытие попапов

  function closePopupAddGoodsAndNavigate() {
    setOpenPopupAddGoods(false);
    navigate("/basket");
  }

  function closeAllPopups() {
    setOpenPopupAddGoods(false);
  }


  function handlePopupCloseClick(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  useEffect(() => {
    if (openPopupAddGoods) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closeAllPopups()
        }
      }

      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [openPopupAddGoods]);

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
            setOpenPopupAddGoods={setOpenPopupAddGoods}
            setTitleGoodsForPopup={setTitleGoodsForPopup}
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
            expressDelivery={expressDelivery}
            setExpressDelivery={setExpressDelivery}
            discountsValue={discountsValue}
            setDiscountsValue={setDiscountsValue}
            discountsError={discountsError}
            setDiscountsError={setDiscountsError}
            contentRefBasketPage={contentRefBasketPage}
            handleScrollRight={handleScrollRight}
            handleScrollLeft={handleScrollLeft}
            setOpenPopupAddGoods={setOpenPopupAddGoods}
            setTitleGoodsForPopup={setTitleGoodsForPopup}
            dayError={dayError}
            setDayError={setDayError}
          />}
        />
        <Route path="/popular-sets/:vendorCode" element={<ProduktPage
          setOpenPopupAddGoods={setOpenPopupAddGoods}
          setTitleGoodsForPopup={setTitleGoodsForPopup}
          addToCart={addToCart}
          quantity={quantity}
        />} />
      </Routes>
      <Footer />
      <PopupAddGoods
        openPopupAddGoods={openPopupAddGoods}
        handlePopupCloseClick={handlePopupCloseClick}
        closeAllPopups={closeAllPopups}
        closePopupAddGoodsAndNavigate={closePopupAddGoodsAndNavigate}
        titleGoodsForPopup={titleGoodsForPopup}
      />
    </div >
  );
}

export default App;
