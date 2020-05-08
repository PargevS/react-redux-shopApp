import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// ****************************
import MainLayout from "../../components/UI/MainLayout";
import PhoneList from "../../components/PhoneList";
import {basketActions, producerActions} from "../../redux/actions";

const PhonesByProducer = ({match}) => {
    const dispatch = useDispatch();
    const producers = useSelector(state => state.producers);
    const producerId = match.params.id;

    const addPhoneToBasket = (id) => basketActions.addPhoneToBasket(id)(dispatch);

    useEffect(() => {
        producerActions.fetchPhonesByProducer(producerId)(dispatch);
    }, [producerId])


    if (producers.phones) {
        const producer = producers.producers.find(prd => prd.id.toString() === producerId);
        if(producer){
            return (
                <MainLayout>
                    <h1 style={{textAlign: 'center', margin: '20px 0'}}>
                        {producer.name }
                    </h1>
                    <PhoneList phones={producers.phones} addPhoneToBasket={addPhoneToBasket}/>
                </MainLayout>
            );
        }else {
            return (
                <MainLayout>
                    <p>Not Phones</p>
                </MainLayout>
            );
        }
    }
};

export default PhonesByProducer;