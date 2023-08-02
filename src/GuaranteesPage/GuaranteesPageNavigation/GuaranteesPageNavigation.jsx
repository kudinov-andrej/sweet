import { NavLink } from 'react-router-dom';
import '../../ProduktPage/ProduktPage.css';

function GuaranteesPageNavigation(props) {


    return (
        <nav className='guarantee__navigation'>
            <NavLink className={({ isActive }) => `guarantee__navigation-punct ${isActive ? "guarantee__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
            <NavLink className={({ isActive }) => `guarantee__navigation-punct ${isActive ? "guarantee__navigation-punct_active" : ""}`} to="/guarantees" >Гарантия вкуса и качества</NavLink>
        </nav>
    );
}

export default GuaranteesPageNavigation;
