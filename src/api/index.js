import {PHONES} from "../data";

export const fetchPhonesAPI = async () => {
    try {
        return await PHONES;
    } catch (e) {
        return 'Error while receiving data.';
    }
}


export const loadMorePhonesAPI = async (offset) => {
    try {
        return await PHONES;
    } catch (e) {
        return 'Error while receiving data.';
    }
}

export const fetchPhoneByIdAPI = async (id) => {
    try {
        const phone = PHONES.find(phone => phone.id === id);
        return phone;
    } catch (e) {
        return e;
    }
}

export const searchPhoneApi = (text) => {
        let phones = [];
        const regx = new RegExp("\\b" + text + "\\b", "i");
        PHONES.forEach(phone => {
            if (regx.test(phone.name) || regx.test(phone.producer)) phones.push(phone);
        });
        return phones;
}
