import { NavLink } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import ProductItem from './ProductItem'

function BasketPage(props) {
    const [quantity, setQuantity] = useState(props.quantity);

    function getTotalPrice() {
        return props.cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
    }



    return (
        <section className='basket'>
            <div className='basket__navigation-block'>
                <nav className='basket__navigation'>
                    <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to="/" >Главная &gt;</NavLink>
                    <NavLink className={({ isActive }) => `basket__navigation-punct ${isActive ? "basket__navigation-punct_active" : ""}`} to='/basket' >Корзина</NavLink>
                </nav>
                <h2 className='basket__title'>Ваша корзина</h2>
                <p className='basket__info'>{props.cartItems.length} макаронс / {getTotalPrice()} рублей</p>
            </div>
            <div className='goods-list'>
                {props.cartItems.map((card, id) =>
                    < ProductItem
                        key={id}
                        id={card.id}
                        srcProduct={card.srcProduct}
                        altProduct={card.altProduct}
                        title={card.title}
                        description={card.description}
                        productPrice={card.productPrice}
                        tastes={card.tastes}
                        quantity={card.quantity}
                        getTotalPrice={getTotalPrice}
                        setQuantity={setQuantity}
                    />
                )}

            </div>
        </section >
    );
}

export default BasketPage;
