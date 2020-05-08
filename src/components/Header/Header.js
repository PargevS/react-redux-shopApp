import React from 'react';
import {Link} from 'react-router-dom';
// ***************************
import './Header.scss';
import BasketWidget from "../../containers/BasketWidget";
import TopMenuWidget from "../../containers/TopMenuWidget";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <input type="checkbox" id="top-menu-toggle" />
                <label htmlFor="top-menu-toggle" id="top-menu-toggle-label">
                    <span></span>
                </label>

                <div className="logo col">
                    <h1><Link to="/" exact="true" >PHone SHop</Link></h1>
                </div>
                <div className="dropdown-menu col">
                    <div className="col-drop">
                        <TopMenuWidget/>
                    </div>
                    <div className="right-block col-drop">
                        <div className="basket">
                            <BasketWidget/>
                        </div>
                        <div className="auth">
                            <Link to="/authorization" className="btn-auth">
                                <i className="fa fa-user"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
