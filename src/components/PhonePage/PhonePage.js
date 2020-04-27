import React from 'react';
// *************************
import './PhonePage.scss';

const PhonePage = ({phone}) => {
    return (
        <div className='container phone-page'>
            <div className="content">
                <div className="thumbnail">
                    <img src={phone.img} alt=""/>
                </div>
                <div className="description">

                    {/*{/*Phone characteristics header*/}
                    <div className="header">
                        <h1>{phone.producer + ' ' +phone.name}</h1>
                        <div className="short-desc">
                            <div className="item">
                                <span className="name">Producer : </span>
                                <span className="value">{phone.producer}</span>
                            </div>
                            <div className="item">
                                <span className="name">Available : </span>
                                <span className="value">Yes</span>
                            </div>
                            <div className="item">
                                <span className="name">Warranty : </span>
                                <span className="value">1 year</span>
                            </div>
                        </div>
                        <h2 className="price">{phone.price}$</h2>
                        <button className="btn btn-info btn-lg">By Now</button>
                    </div>
                    {/*{/*Phone characteristics header end*/}

                    {/*Main characteristics*/}
                    <div className="details-content">
                        <h3>Main characteristics</h3>
                        <div className="detail">
                            <span className="name">Display Size : </span>
                            <span className="value">{phone.displaySize}dm</span>
                        </div>
                        <div className="detail">
                            <span className="name">Memory : </span>
                            <span className="value">{phone.memory}gb</span>
                        </div>
                        <div className="detail">
                            <span className="name">RAM : </span>
                            <span className="value">{phone.ram}gb</span>
                        </div>
                        <div className="detail">
                            <span className="name">Camera : </span>
                            <span className="value">{phone.mainCamera}</span>
                        </div>
                        <div className="detail">
                            <span className="name">Selfie Camera : </span>
                            <span className="value">{phone.selfieCamera}</span>
                        </div>
                        <div className="detail">
                            <span className="name">Battery : </span>
                            <span className="value">{phone.battery}</span>
                        </div>
                    </div>
                    {/*Main characteristics end*/}

                </div>
            </div>
        </div>
    );
};

export default PhonePage;
