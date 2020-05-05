import React from 'react';
import {Link} from "react-router-dom";
// *************************
import './BasketCart.scss';

const BasketCart = ({itemsAmount = 0, totalPrice = 0}) => {
    return (
        <div className="basket-card">
            <h3>Basket</h3>
            <Link to="/basket"  className="btn card-widget-btn">
                {itemsAmount} (items)
                <span className="hyphen">-</span>
                {totalPrice}$
            </Link>
        </div>
    );
};

export default BasketCart;
