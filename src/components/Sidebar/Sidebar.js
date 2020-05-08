import React from 'react';
// *************************
import './Sidebar.scss';
import BasketCart from "../BasketCart";
import BasketWidget from "../../containers/BasketWidget";
import SearchWidget from "../../containers/SearchWidget";

const Sidebar = () => {
    return (
        <div>
            <SearchWidget/>
        </div>
    );
};

export default Sidebar;
