import {
    FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED,
    FETCH_PHONE_START, FETCH_PHONE_FAILED, FETCH_PHONE_SUCCESS,
    LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_FAILED, LOAD_MORE_PHONES_SUCCESS
} from "../actionTypes";
import {fetchPhonesAPI, loadMorePhonesAPI, fetchPhoneByIdAPI} from "../../api";


export const fetchPhones = () => async (dispatch) => {
    dispatch({type: FETCH_PHONES_START});
    try{
        const phones = await fetchPhonesAPI();
        dispatch({type: FETCH_PHONES_SUCCESS, payload: phones})
    }catch (e) {
        dispatch({type: FETCH_PHONES_FAILED, payload: e, error: true })
    }
}

export const loadMorePhones = () => async  (dispatch, getState) => {
    const offset = 6;
    dispatch({type: LOAD_MORE_PHONES_START});
    try{
        const phones = await loadMorePhonesAPI(offset);
        dispatch({type: LOAD_MORE_PHONES_SUCCESS, payload: phones});
    }catch (e) {
        dispatch({type: LOAD_MORE_PHONES_FAILED, payload: e, error: true })
    }
}

export const fetchPhoneById = (id) => async (dispatch) => {
    dispatch({type: FETCH_PHONE_START});

    try{
        const phone = await fetchPhoneByIdAPI(id);
        dispatch({type: FETCH_PHONE_SUCCESS, payload: phone});
    }catch (e) {
        dispatch({type: FETCH_PHONE_FAILED, payload: e, error: true})
    }
}
