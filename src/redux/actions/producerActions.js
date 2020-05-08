import {
    FETCH_PRODUCERS_START,
    FETCH_PRODUCERS_FAILED,
    FETCH_PRODUCERS_SUCCESS,
    FETCH_PHONES_BY_PRODUCER_FAILED,
    FETCH_PHONES_BY_PRODUCER_START,
    FETCH_PHONES_BY_PRODUCER_SUCCESS
} from "../actionTypes";
import {fetchProducersAPI, fetchProducerByIdAPI, fetchPhonesByProducerAPI} from "../../api";


export const fetchProducers = () => async (dispatch) => {
    dispatch({type: FETCH_PRODUCERS_START});
    try {
        const producers = await fetchProducersAPI();
        dispatch({type: FETCH_PRODUCERS_SUCCESS, payload: producers});
    } catch (e) {
        dispatch({type: FETCH_PRODUCERS_FAILED, payload: e, error: true});
    }
}

export const fetchPhonesByProducer = (producerId) => async (dispatch) => {
    dispatch({type: FETCH_PHONES_BY_PRODUCER_START});
    try{
        const phones = await fetchPhonesByProducerAPI(producerId);
        dispatch({type: FETCH_PHONES_BY_PRODUCER_SUCCESS, payload: phones})
    }catch (e) {
        dispatch({type: FETCH_PHONES_BY_PRODUCER_FAILED, payload: e, error: true});
    }
}