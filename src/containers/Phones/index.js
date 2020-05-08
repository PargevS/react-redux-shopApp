import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// **********************************
import Phone from "../../components/Phone";
import MainLayout from "../../components/UI/MainLayout";
import {basketActions, phoneActions} from "../../redux/actions";
import PhoneList from "../../components/PhoneList";

const Phones = () => {
    const dispatch = useDispatch();
    const phonesObj = useSelector(state => state.phones);
    const ids = useSelector(state => state.phonesPage.ids);
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        phoneActions.fetchPhones()(dispatch);
    }, [phoneActions.fetchPhones, dispatch]);

    useEffect(() => {
        if (!phonesObj.length || !ids.length) {
            const phonesList = getPosts(phonesObj, ids);
            setPhones(phonesList);
        }
    }, [phonesObj, ids]);

    const getPosts = (obj, ids) => {
        const phonesList = [];
        ids.forEach(id => phonesList.push(phonesObj[id]));
        return phonesList;
    }

    const loadMorePhones = () => phoneActions.loadMorePhones()(dispatch);
    const addPhoneToBasket = (id) => basketActions.addPhoneToBasket(id)(dispatch);


    if (!phones.length) {
        return (
            <MainLayout>
                <p style={{paddingTop: 30, paddingLeft: 50}}>Note phones</p>
            </MainLayout>
        );
    } else {
        return (
            <MainLayout>
                <PhoneList phones={phones} addPhoneToBasket={addPhoneToBasket}/>

                <div className="row more">
                    <button
                        onClick={loadMorePhones}
                        className='btn btn-info'>
                        Load More
                    </button>
                </div>
            </MainLayout>
        );
    }
};

export default Phones;
