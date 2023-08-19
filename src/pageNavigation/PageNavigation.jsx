import { NavLink } from 'react-router-dom';
import './PageNavigation.css';

function PageNavigation({ linkToPage, textlinkToPage }) {


    return (
        <nav className='page__navigation'>
            <NavLink className={({ isActive }) => `page__navigation-punct ${isActive ? "page__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
            <NavLink className={({ isActive }) => `page__navigation-punct ${isActive ? "page__navigation-punct_active" : ""}`} to={linkToPage} >{textlinkToPage}</NavLink>
        </nav>
    );
}

export default PageNavigation;