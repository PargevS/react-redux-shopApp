import {
    FETCH_PHONES_SUCCESS, SEARCH_PHONE,
    LOAD_MORE_PHONES_SUCCESS
} from "../actionTypes";

const handlers = {
    [FETCH_PHONES_SUCCESS]: (state, {payload}) => {
        const newArr = [...state.ids];
        payload.forEach((item, idx) => newArr[idx] = item.id);
        return {...state, ids: newArr}
    },
    [LOAD_MORE_PHONES_SUCCESS]: (state, {payload}) => {
        let newArr = [...state.ids];
        const newIds = payload.map((item, idx) => newArr[idx] = item.id);
        const moreIds = newArr.concat(newIds);
        return {...state, ids: moreIds}
    },
    [SEARCH_PHONE]: (state, {payload}) => {
        const ids = [];
        if(payload !== []) payload.forEach((item, idx) => ids[idx] = item.id);
        return {...state, ids}
    },
    DEFAULT: state => state
}

const initialState = {ids: []};

const phonesPageReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export default phonesPageReducer;
