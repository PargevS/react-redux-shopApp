import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// *******************************
import './Layout.scss';
import routes from "../../routes";
import {PHONES} from "../../data";

const Layout = () => {

    return (
        <div className='view-wrapper'>
            <Router>
                <div className="container">
                    <div className="row main">
                        <main className='col main-content'>
                            {routes()}
                        </main>
                        <aside className='col sidebar'>
                            Sidebar
                        </aside>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Layout;
