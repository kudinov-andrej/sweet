import { NavLink } from 'react-router-dom';
import '../../App.css';

function BasketNavigationBlock(props) {


    return (
        <div className='basket__navigation-block'>
            <nav className='basket__navigation'>
                <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
                <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to='/basket' >Корзина</NavLink>
            </nav>
            <h2 className='basket__title'>Ваша корзина</h2>

            <p className='basket__info'>{props.cartItems.length} макаронс /  {props.getTotalPrice() - props.discountsValue} рублей</p>
        </div>
    );
}

export default BasketNavigationBlock;
