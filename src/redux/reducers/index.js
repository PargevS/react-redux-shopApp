import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
// ********************************************
import phonesReducer from "./phonesReducer";
import phonesPageReducer from "./phonesPageReducer";
import phonePageReducer from "./phonePageReducer";
import basketReducer from "./basketReducer";
import producersReducer from "./producerReducer";


const createRootReducer = history => combineReducers({
    phones: phonesReducer,
    producers: producersReducer,
    phonesPage: phonesPageReducer,
    phonePage: phonePageReducer,
    basket: basketReducer,
    router: connectRouter(history),
});


export default createRootReducer;
