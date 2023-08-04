import { NavLink } from 'react-router-dom';
import '../../contactsPage/ContactsPage.css';

function ContactsPageNavigation(props) {


    return (
        <nav className='contacts-page__navigation'>
            <NavLink className={({ isActive }) => `contacts-page__navigation-punct ${isActive ? "contacts-page__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
            <NavLink className={({ isActive }) => `contacts-page__navigation-punct ${isActive ? "contacts-page__navigation-punct_active" : ""}`} to="/contacts" >Контакты</NavLink>
        </nav>
    );
}

export default ContactsPageNavigation;
