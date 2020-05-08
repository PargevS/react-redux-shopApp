import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// *********************************
import TopMenu from "../../components/TopMenu";
import {producerActions} from './../../redux/actions';

const TopMenuWidget = () => {
    const dispatch = useDispatch();
    const producers = useSelector(state => state.producers.producers);


    useEffect(() => {
        producerActions.fetchProducers()(dispatch);
    }, []);

    return <TopMenu producers={producers ? producers : []}/>
};

export default TopMenuWidget;