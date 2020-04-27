import {PHONES} from "../data";

export const fetchPhonesAPI = async () => {
    try{
        return await PHONES;
    }catch (e) {
        return 'Error while receiving data.';
    }
}


export const loadMorePhonesAPI = async (offset) => {
    try{
        return await PHONES;
    }catch (e) {
        return 'Error while receiving data.';
    }
}
