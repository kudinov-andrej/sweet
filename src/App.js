import './App.css';
import HeaderAnimationBlock from './HeaderAnimationBlock'



function App() {
  return (
    <div className="App">
      <header className='header' >
        <HeaderAnimationBlock />
        {/*
        <div className='header__animation'>
          <button className='header__animation-button header__animation-button_type_left'></button>
          <div className='animation-punkt' >
            <div className='animation-punkt__backgraund animation-punkt__backgraund_type_delivery'></div>
            <p className='animation-punkt__text'>ДОСТАВКА В ДЕНЬ ЗАКАЗА</p>
          </div>
          <div className='animation-punkt' >
            <div className='animation-punkt__backgraund animation-punkt__backgraund_type_supply'></div>
            <p className='animation-punkt__text'>ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</p>
          </div>
          <div className='animation-punkt' >
            <div className='animation-punkt__backgraund animation-punkt__backgraund_type_fresh'></div>
            <p className='animation-punkt__text'>ВСЕГДА СВЕЖЕЕ</p>
          </div>
          <div className='animation-punkt' >
            <div className='animation-punkt__backgraund animation-punkt__backgraund_type_almond'></div>
            <p className='animation-punkt__text'>100%</p>
            <p className='animation-punkt__text'>МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ</p>
          </div>
          <button className='header__animation-button header__animation-button_type_right'></button>
  </div> */}
        <nav className='header__navigation'>
          <ul className='header__navigation-block'>
            <li className='header__navigation-link'>Гарантия свежести</li>
            <li className='header__navigation-link'>Доставка и оплата</li>
            <li className='header__navigation-link'>Оптовые поставки</li>
            <li className='header__navigation-link'>Контакты</li>
          </ul>
          <div className='header__location-block'>
            <div className='header__location-img'></div>
            <p className='header__location-name'>Москва</p>
          </div>
          <div className='header__phone'>
            <div className='header__phone-img'></div>
            <p className='header__phone-name'>8-928-470-23-12</p>
          </div>
          <div className='header__basket'>
            <div className='header__basket-img'></div>
            <p className='header__basket-quantity'>4</p>
            <p className='header__basket-name'>8-928-470-23-12</p>
          </div>
          <ul className='header__sotial-block'>
            <li className='header__sotial-link'></li>
            <li className='header__sotial-link'></li>
            <li className='header__sotial-link'></li>
          </ul>
        </nav>
        <nav className='header__importent-navigation'>
          <ul className='header__importent-navigation-block'>
            <li className='header__importent-navigation-link'>СЛАДКИЕ ДНИ <span className='importent-navigation-link__discount'>%</span></li>
            <li className='header__importent-navigation-link'>подарочные наборы</li>
            <li className='header__importent-navigation-link'>Собрать набор</li>
          </ul>
          <div className='header__logo'></div>
          <ul className='header__importent-navigation-block'>
            <li className='header__importent-navigation-link'>Создать дизайн</li>
            <li className='header__importent-navigation-link'>КОМПАНИЯМ</li>
            <li className='header__importent-navigation-link'>ВЕСЬ КАТАЛОГ</li>
          </ul>
        </nav>

      </header>
    </div >
  );
}

export default App;
