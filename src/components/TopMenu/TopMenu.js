import React from 'react';
// ***********************
import './TopMenu.scss';
import {Link} from "react-router-dom";

const TopMenu = ({producers}) => {
    return (
        <nav className="top-menu">
            <ul className="nav-ul">
                <li className="ul-item"><Link to="/">Home</Link></li>
                <li className="dropdown-item ul-item">
                    <Link to="">Producers</Link>
                    <ul className="dropdown-ul">
                        {
                            producers.map(producer =>
                                (<li key={producer.id}>
                                    <Link to={`/producers/${producer.id}`}>{producer.name}</Link>
                                </li>))
                        }
                    </ul>
                </li>
                <li className="ul-item"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default TopMenu;