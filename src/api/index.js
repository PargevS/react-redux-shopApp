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

export const fetchPhoneByIdAPI = async (id) => {
    try{
        const phone = PHONES.find(phone => phone.id === id);
        return phone;
    }catch (e) {
       return e;
    }
}
