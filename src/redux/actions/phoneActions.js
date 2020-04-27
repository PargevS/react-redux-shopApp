import {
    FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED,
    LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_FAILED, LOAD_MORE_PHONES_SUCCESS
} from "../actionTypes";
import {fetchPhonesAPI, loadMorePhonesAPI} from "../../api";


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

    }
}
