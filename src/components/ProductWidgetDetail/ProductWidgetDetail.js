import React from 'react';
// *************************
import './ProductWidgetDetail.scss';

const ProductWidgetDetail = ({name, characteristic}) => {
    return (
        <div className="item">
            <span className="name">{name} : </span>
            <span className="value">{characteristic}</span>
        </div>
    );
};

export default ProductWidgetDetail;
