import {FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED} from "../actionTypes";
import {fetchPhonesAPI} from "../../api";


export const fetchPhones = () => async (dispatch) => {
    dispatch({type: FETCH_PHONES_START});
    try{
        const phones = await fetchPhonesAPI();
        dispatch({type: FETCH_PHONES_SUCCESS, payload: phones})
    }catch (e) {
        dispatch({type: FETCH_PHONES_FAILED, payload: e, error: true })
    }
}
