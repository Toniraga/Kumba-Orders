import React from 'react';
import './orderItem.css';


const OrderItem = ({ name, category, price, currency, tax, quantity }) => {
    return (
        <div className='items'>
            <div className='__name'> <h4> Name </h4> <p> {name} </p></div>
            <div className='__category'> <h4> Category </h4> <p> {category} </p></div>
            <div className='__price'> <h4> Price(per unit) </h4> <p> {currency} {price} </p></div>
            <div  className='__tax'> <h4> Tax </h4> <p> {tax}% </p></div>
            <div className='__quantity'> <h4> Qty </h4> <p> {quantity} </p></div>
        </div>
    )
}

export default OrderItem
