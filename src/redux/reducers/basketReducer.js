import {ADD_PHONE_TO_BASKET} from "../actionTypes";


const handlers = {
    [ADD_PHONE_TO_BASKET]: (state, {payload}) => {
        const products = [...state.products];
        const totalPrice = state.totalPrice + payload.price;
        const findIdx = products.findIndex(item => item.id === payload.id);

        if(findIdx > -1){
            products[findIdx].amount += 1;
        }else {
            const product = {...payload, amount: 1};
            products.push(product);
        }

        return {...state, products, totalPrice};
    },
    DEFAULT: state => state
}

const initialState = {products: [], totalPrice: 0};

const basketReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}


export default basketReducer;
