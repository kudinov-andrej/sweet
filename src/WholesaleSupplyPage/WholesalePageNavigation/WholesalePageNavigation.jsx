import { NavLink } from 'react-router-dom';
import '../../WholesaleSupplyPage/WholesaleSupplyPage.css';

function WholesalePageNavigation(props) {


    return (
        <nav className='wholesale__navigation'>
            <NavLink className={({ isActive }) => `wholesale__navigation-punct ${isActive ? "wholesale__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
            <NavLink className={({ isActive }) => `wholesale__navigation-punct ${isActive ? "wholesale__navigation-punct_active" : ""}`} to="/wholesale-supply" >Предложения для юридических лиц</NavLink>
        </nav>
    );
}

export default WholesalePageNavigation;
