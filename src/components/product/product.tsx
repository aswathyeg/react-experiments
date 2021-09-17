import React, { useState } from 'react';
import './product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}
const getTotal = (total) => {
    return total.toLocaleString(undefined, currencyOptions)

}

export default function Product() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


    const addMore = () => {
        setCart(['IceCream']);
        setTotal(5);

    }
    const remove = () => {
        setCart([]);
        setTotal(0);
    }


    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
        </div>
            <div>Total: {getTotal(total)}</div>

            <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
            <button onClick={addMore}>Add</button> <button onClick={remove}>Remove</button>
        </div>
    )
}