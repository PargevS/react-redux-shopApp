import React from 'react';
// ************************
import './PhoneList.scss';
import Phone from "../Phone";
import MainLayout from "../UI/MainLayout";

const PhoneList = ({phones, addPhoneToBasket}) => {
    return (
        <div className='phone-list'>
            {
                phones.map((phone, idx) => (<Phone
                    phone={phone}
                    key={phone.id + idx}
                    addToBasket={(id) => addPhoneToBasket(id)}/>))
            }
        </div>
    );
};

export default PhoneList;