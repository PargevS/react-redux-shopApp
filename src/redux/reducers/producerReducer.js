import {
    FETCH_PRODUCERS_SUCCESS,
    FETCH_PHONES_BY_PRODUCER_SUCCESS
} from "../actionTypes";

const initialState = {producers: [], phones: []};

const handlers = {
    [FETCH_PRODUCERS_SUCCESS]: (state, {payload}) => {
        return {...state, producers: payload}
    },
    [FETCH_PHONES_BY_PRODUCER_SUCCESS]: (state, {payload}) => {
        return {...state, phones: [...payload]}
    },
    DEFAULT: state => state
}

const producersReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}


export default producersReducer;