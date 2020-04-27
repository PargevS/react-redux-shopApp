import {FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED, FETCH_PHONES_START, LOAD_MORE_PHONES_SUCCESS} from "../actionTypes";

const handlers = {
    [FETCH_PHONES_SUCCESS]: (state, {payload}) => {
        const newArr = [...state.ids];
        payload.forEach((item, idx) => newArr[idx] = item.id);
        return {...state, ids: newArr}
    },
    [LOAD_MORE_PHONES_SUCCESS]: (state, {payload}) => {
        let newArr = [...state.ids];
        const newIds =  payload.map((item, idx) => newArr[idx] = item.id);
        const moreIds = newArr.concat(newIds);
        console.log(newIds);
        return {...state, ids: moreIds}
    },
    DEFAULT: state => state
}

const initialState = {ids: []};

const phonePageReducer = (state = initialState, action) =>{
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export default phonePageReducer;
