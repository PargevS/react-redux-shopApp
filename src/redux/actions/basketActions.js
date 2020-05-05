import {ADD_PHONE_TO_BASKET} from "../actionTypes";
import { fetchPhoneByIdAPI} from "../../api";

export const addPhoneToBasket = id => async (dispatch) => {
    let phone = await fetchPhoneByIdAPI(id);
    dispatch({type: ADD_PHONE_TO_BASKET, payload: phone});
}
