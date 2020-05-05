import React from 'react';
// *************************
import './ProductDetail.scss';

const ProductDetail = ({name, characteristic, type = null}) => {
    return (
        <div className="detail">
            <span className="name">{name} : </span>
            <span className="value">{characteristic}{type}</span>
        </div>
    );
};

export default ProductDetail;
