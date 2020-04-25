import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// *******************************
import './Layout.scss';
import routes from "../../routes";

const Layout = () => {

    return (
        <Router>
            {routes()}
        </Router>
    );
};

export default Layout;
