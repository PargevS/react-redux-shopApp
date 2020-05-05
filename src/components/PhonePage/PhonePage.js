import React from 'react';
// *************************
import './PhonePage.scss';
import ProductDetail from "../ProductDetail";
import ProductWidgetDetail from "../ProductWidgetDetail";
import BasketWidget from "../../containers/BasketWidget";

const PhonePage = ({phone, addToBasket}) => {
    return (
        <div className='container phone-page'>
            <div className="content">
                <div className="thumbnail">
                    <img src={phone.img} alt=""/>
                </div>
                <div className="description">

                    {/*{/*Phone characteristics header*/}
                    <div className="header">
                        <BasketWidget/>
                        <h1>{phone.producer + ' ' + phone.name}</h1>
                        <div className="short-desc">

                            <ProductWidgetDetail name="Producer" characteristic={phone.producer}/>
                            <ProductWidgetDetail name="Available" characteristic="Yes" />
                            <ProductWidgetDetail name="Warranty" characteristic="1 year" />

                        </div>
                        <h2 className="price">{phone.price}$</h2>
                        <button
                            onClick={() => addToBasket(phone.id)}
                            className="btn btn-info btn-lg">
                            By Now
                        </button>
                    </div>
                    {/*{/*Phone characteristics header end*/}

                    {/*Main characteristics*/}
                    <div className="details-content">
                        <h3>Main characteristics</h3>

                        <ProductDetail name="Display Size" characteristic={phone.displaySize} type="dm" />
                        <ProductDetail name="Memory" characteristic={phone.memory} type="gb" />
                        <ProductDetail name="RAM" characteristic={phone.ram} type="gb" />
                        <ProductDetail name="Main Camera" characteristic={phone.mainCamera}  />
                        <ProductDetail name="Selfie Camera" characteristic={phone.selfieCamera}  />
                        <ProductDetail name="Battery" characteristic={phone.battery}  />

                    </div>
                    {/*Main characteristics end*/}
                </div>
            </div>
        </div>
    );
};

export default PhonePage;
