import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// *************************
import {phoneActions} from "../../redux/actions";
import Layout from "../Layout";
import PhonePage from "../../components/PhonePage";


const Phone = (props) => {
    const dispatch = useDispatch();
    const phone = useSelector(state => state.phonePage.phone);

    useEffect(() => {
        setTimeout(() => {
            const id = props.match.params.id;
            phoneActions.fetchPhoneById(id)(dispatch);
        }, 100)
    }, []);

    console.log(phone);

    if(!phone.id){
        return <p>Loading....</p>
    }else {
        return <PhonePage phone={phone}/>
    }


};

export default Phone;
