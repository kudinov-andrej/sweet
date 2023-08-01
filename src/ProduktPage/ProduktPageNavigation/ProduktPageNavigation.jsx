import { NavLink } from 'react-router-dom';
import '../../ProduktPage/ProduktPage.css';

function ProduktPageNavigation(props) {


    return (
        <nav className='produkt__navigation'>
            <NavLink className={({ isActive }) => `produkt__navigation-punct ${isActive ? "produkt__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
            <NavLink className={({ isActive }) => `produkt__navigation-punct ${isActive ? "produkt__navigation-punct_active" : ""}`} to={`/popular-sets/${props.vendorCode}`} >Товар</NavLink>
        </nav>
    );
}

export default ProduktPageNavigation;
