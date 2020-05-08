import React from 'react';
import {Link} from "react-router-dom";
// *************************
import './BasketCart.scss';

const BasketCart = ({itemsAmount = 0, totalPrice = 0}) => {
    return (
        <React.Fragment>
            <Link to="/basket"  className="btn card-widget-btn">
                <i className="fa fa-cart-arrow-down"></i>
                {itemsAmount} (items)
                <span className="hyphen">-</span>
                {totalPrice}$
            </Link>
        </React.Fragment>
    );
};

export default BasketCart;
