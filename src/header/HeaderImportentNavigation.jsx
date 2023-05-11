import '../App.css';


function HeaderImportentNavigation() {
    return (
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
    );
}

export default HeaderImportentNavigation;