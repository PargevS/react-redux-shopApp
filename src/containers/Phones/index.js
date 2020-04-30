import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// **********************************
import Phone from "../../components/Phone";
import MainLayout from "../../components/UI/MainLayout";
import {basketActions, phoneActions} from "../../redux/actions";

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
        return <p>Loading...</p>;
    } else {
        return (
            <MainLayout>
                <div className='phone-list'>
                    {
                        phones.map((phone, idx) => (<Phone
                            phone={phone}
                            key={phone.id + idx}
                            addToBasket={(id) => addPhoneToBasket(id)}/>))
                    }
                </div>
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
