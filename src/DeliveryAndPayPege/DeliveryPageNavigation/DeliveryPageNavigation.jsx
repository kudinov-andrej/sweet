import { NavLink } from 'react-router-dom';
import '../../DeliveryAndPayPege/DeliveryAndPayPege.css';

function DeliveryPageNavigation(props) {


    return (
        <nav className='delivery__navigation'>
            <NavLink className={({ isActive }) => `delivery__navigation-punct ${isActive ? "delivery__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
            <NavLink className={({ isActive }) => `delivery__navigation-punct ${isActive ? "delivery__navigation-punct_active" : ""}`} to="/delivery-and-pay" >Доставка и оплата</NavLink>
        </nav>
    );
}

export default DeliveryPageNavigation;
