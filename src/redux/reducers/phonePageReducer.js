import {FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED, FETCH_PHONES_START} from "../actionTypes";

const handlers = {
    [FETCH_PHONES_SUCCESS]: (state, {payload}) => {
        const newArr = [];
        payload.forEach((item, idx) => newArr[idx] = item.id);
        return {...state, ids: newArr}
    },
    DEFAULT: state => state
}

const initialState = {ids: []};

const phonePageReducer = (state = initialState, action) =>{
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export default phonePageReducer;
