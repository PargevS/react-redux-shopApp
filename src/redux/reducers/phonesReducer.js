import {FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED, FETCH_PHONES_START} from "../actionTypes";
import {forEach} from "ramda";


const handlers = {
    [FETCH_PHONES_SUCCESS]: (state, {payload}) => {
        const newObj = {};
        payload.forEach(item => newObj[item.id] = item);
        return {...state, ...newObj}
    },
    [FETCH_PHONES_FAILED]: (state, {payload, error}) =>{
        return {}
    },
    DEFAULT: state => state
}

const phonesReducer = (state = {}, action) =>{
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}


export default phonesReducer;
