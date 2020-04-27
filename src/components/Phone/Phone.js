import React from 'react';
// *************************
import './Phone.scss';
import {Link} from "react-router-dom";

const Phone = ({phone}) => {
    return (
        <div className='phone-card'>
            <div className="thumb">
                <Link to={`/phones/${phone.id}`} >
                    <img src={phone.img} alt={phone.producer + ' ' + phone.name}/>
                </Link>
            </div>

            <div className="caption">
                <p className='price'>{phone.price}$</p>
                <h4><Link to={`/phones/${phone.id}`} >{phone.producer + ' ' + phone.name}</Link></h4>
            </div>
            <div className="caption">
                <button className='btn'>More Info</button>
                <button className='btn btn-info'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Phone;
