import React from 'react';
// *************************
import './Sidebar.scss';
import BasketCart from "../BasketCart";
import BasketWidget from "../../containers/BasketWidget";

const Sidebar = () => {
    return (
        <div>
            <BasketWidget/>
        </div>
    );
};

export default Sidebar;
