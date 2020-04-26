import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {phoneActions} from "../../redux/actions";
// **********************************
import './Phones.scss';
import Phone from "../../components/Phone";

const Phones = () => {
    const dispatch = useDispatch();
    const phonesObj = useSelector(state => state.phones);
    const ids = useSelector(state => state.phonePage.ids);
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


    if (!phones.length) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className='phone-list'>
                {
                    phones.map(phone => <Phone phone={phone} key={phone.id}/>)
                }
            </div>
        );
    }


};

export default Phones;