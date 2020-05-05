import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// *************************
import {phoneActions, basketActions} from "../../redux/actions";
import PhonePage from "../../components/PhonePage";


const Phone = (props) => {
    const dispatch = useDispatch();
    const phone = useSelector(state => state.phonePage.phone);

    const addPhoneToBasket = (id) => {
        basketActions.addPhoneToBasket(id)(dispatch);
    }

    useEffect(() => {
        setTimeout(() => {
            const id = props.match.params.id;
            phoneActions.fetchPhoneById(id)(dispatch);
        }, 100)
    }, []);


    if (!phone.id) {
        return (<p>Loading....</p>);
    } else {
        return (<PhonePage phone={phone} addToBasket={(id) => addPhoneToBasket(id)}/>);
    }
};

export default Phone;
