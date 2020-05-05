import React from 'react';
import {useSelector} from 'react-redux';
//*****************************************
import BasketCart from "../../components/BasketCart";

const BasketWidget= () => {
    const {products, totalPrice} = useSelector(state => state.basket);


    return <BasketCart totalPrice={totalPrice} itemsAmount={products.length} />
};

export default BasketWidget;
