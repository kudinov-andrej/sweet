import '../App.css';
import { useState, useEffect } from 'react';


function ProductItem(props) {

    const [quantity, setQuantity] = useState(props.quantity);

    useEffect(() => {
        props.getTotalPrice()
        console.log("вызвался эффект")
    }, [quantity])

    function increment() {
        setQuantity(quantity + 1)

    }

    function dicrement() {
        setQuantity(quantity - 1)

    }

    return (
        <div className='Goods-list__product-item'>
            <img className='product-item__img' src={props.srcProduct} alt={props.altProduct} />
            <div className='product-item__information'>
                <h2 className='product__title'>{props.title}</h2>
                <ul className='product__tastes-list'>
                    {Object.keys(props.tastes).map((key) => (
                        <li className='product__tastes-item' key={key}>
                            {key}: {props.tastes[key]}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='product__button-conteiner'>
                <button className='product__button-quantity' onClick={dicrement}>-</button>
                <p className='product__quantity'>{quantity}</p>
                <button className='product__button-quantity' onClick={increment}>+</button>
            </div>
            <p className='product-price'>Цена: {props.productPrice * quantity}</p>
        </div>
    );
}

export default ProductItem;
