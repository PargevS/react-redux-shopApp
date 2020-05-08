import {PHONES, PRODUCERS} from "../data";

// phones
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

// producers
export const fetchProducersAPI = async () => {
    try {
        return await PRODUCERS;
    } catch (e) {
        return 'Error while receiving data.';
    }
}


export const fetchPhonesByProducerAPI = async (producerId) => {
    try{
        const phones = await PHONES;
        const srchPhones = [];
        phones.forEach(phone => {
            if(phone.categoryId.toString() === producerId) srchPhones.push(phone);
        });
        return srchPhones;
    }catch (e) {
        return 'Error while receiving data.';
    }
}
