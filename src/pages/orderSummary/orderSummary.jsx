import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordersFetched } from '../../redux/orders/orders.actions';
import { calcTotal } from '../../utils/CalcTotal'

import SideNav from '../../components/sideNav/sideNav';
import OrderItem from '../../components/orderItem/orderItem';

import './orderSummary.css'

const OrderSummary = () => {
    const [ drop, setDrop ] = useState(false)

    const dispatch = useDispatch()
    const { order_id, items, restaurant, user, createdAt } = useSelector((state) => state);
    const { total, subTotal } = calcTotal(items)

    useEffect(() => {
        fetch("https://indapi.kumba.io/webdev/assignment")
        .then((res) => res.json())
        .then((json) => dispatch(ordersFetched(json)));
    }, [])

    return (
        <div className='order_summary'>
            <SideNav />
            <div className='order_main'>
                <h1> Order Summary </h1>
                <div className='order_body'>
                    <div className='_order'> Order: </div>
                    <div className='order_details'> 
                        <div className='order_item'>
                            <div> <h4> Order ID </h4> <p> #{order_id} </p></div>
                            <div> <h4> Date </h4> <p> {createdAt.split('T')[0]} </p></div>
                            <div> <h4> Amount </h4> <p> INR {total} </p></div>
                            <div> <h4> Restaurant </h4> <p> {restaurant?.name} </p></div>
                            <div onClick={() => setDrop(!drop)}> { drop ? 'hide' : 'Details'} </div>
                        </div>
                        { drop &&
                            <div className='item_details'>
                                <div className='item_details_info'> 
                                    <div className='restaurant'> 
                                        <div className='restaurant_name'> Restaurant Details: </div>
                                        <div> Street: {restaurant.street} </div>
                                        <div> City: {restaurant.city} </div>
                                        <div> State: {restaurant.state} </div>
                                        <div> ZipCode: {restaurant.zipcode} </div>
                                    </div>
                                    <div className='customer'> 
                                        <div className='customer_name'> Shipping Details: </div>
                                        <div> Customer Username: { user.name } </div>
                                        <div> Shipping Address: { user.address } 
                                        <div> Phone: { user.phone } </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='__items'> 
                                    <div className='items_length'> Items: {items.length} </div>
                                    {items.map((item, i) => (
                                        <OrderItem 
                                            key={i}
                                            name={item.name} 
                                            category={item.category} 
                                            price={item.price} 
                                            currency={item.currency}
                                            tax={item.tax_pct}
                                            quantity={item.quantity}  />
                                    ))}
                                    <div className='order_total'> 
                                        <div> SubTotal: <span>INR {subTotal}</span> </div>
                                        <div> Tax: <span>INR {total - subTotal}</span> </div>
                                        <div> Total (plus tax): <span> INR {total} </span> </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='place_order'> Place Order </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
