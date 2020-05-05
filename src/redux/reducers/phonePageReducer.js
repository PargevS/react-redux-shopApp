import {FETCH_PHONE_SUCCESS, FETCH_PHONES_START} from "../actionTypes";

const initialState = {
    phone: {},
    phoneId: null
}

const handlers = {
    [FETCH_PHONE_SUCCESS]: (state, {payload}) => {
        return {...state, phone: payload, phoneId: payload.id};
    },
    [FETCH_PHONES_START]: (state) => {
      return initialState
    },
    DEFAULT: state => state
}

const phonePageReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export default phonePageReducer;
