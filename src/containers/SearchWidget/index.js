import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// ************************************
import Search from "../../components/Search";
import {phoneActions} from "../../redux/actions";

const SearchWidget = () => {
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState('');

    const inputChangeHandler = (e) => setInputVal(e.target.value);

    const onSubmit = () => {
        phoneActions.searchPhone(inputVal)(dispatch);
        setInputVal('');
    }


    return <Search inputChangeHandler={inputChangeHandler} onSubmit={onSubmit} defVal={inputVal}/>
};

export default SearchWidget;
