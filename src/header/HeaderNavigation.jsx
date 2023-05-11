import '../App.css';


function HeaderNavigation() {
    return (
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
                <div className='header__basket-img'>
                    <p className='header__basket-quantity'>4</p>
                </div>
                <p className='header__basket-name'>В корзине(4 товара)</p>
            </div>
            <ul className='header__sotial-block'>
                <li className='header__sotial-link header__sotial-link_type_tg'></li>
                <li className='header__sotial-link header__sotial-link_type_vk'></li>
                <li className='header__sotial-link header__sotial-link_type_ok'></li>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;
