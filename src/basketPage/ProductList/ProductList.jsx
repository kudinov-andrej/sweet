import '../../App.css';
import ProductItem from '../ProductItem/ProductItem';

function ProductList(props) {

    return (

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
                    incrementQuantityProductInBasket={props.incrementQuantityProductInBasket}
                    dicrementQuantityProductInBasket={props.dicrementQuantityProductInBasket}
                    quantity={props.quantity}
                    cartItems={props.cartItems}
                    addToCart={props.addToCart}

                />
            )}
            <div className="basket__total-price_conteiner">
                <p className="basket__total-price_text">Общая стоимость Вашей покупки без учета доставки составит: </p>
                <p className="basket__total-price">{props.getTotalPrice()} руб.</p>
            </div>
        </div>
    );
}

export default ProductList;
