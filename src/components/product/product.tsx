import React, { useState } from 'react';
import './product.css';
const products = [
    {
      emoji: '🍦',
      name: 'ice cream',
      price: 5
    },
    {
      emoji: '🍩',
      name: 'donuts',
      price: 2.5,
    },
    {
      emoji: '🍉',
      name: 'watermelon',
      price: 4
    }
  ];
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

            <div>
                {products.map(products=>(
                    <div key ={products.name}>
                        <div className="product">
                            <span role="img"aria-label={products.name}>{products.emoji}</span>
                            </div>
            <button>Add</button>
            <button>Remove</button>
          </div>
                ))}
                </div>
        </div>
    )
}