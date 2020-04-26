import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
// ********************************************
import phonesReducer from "./phonesReducer";
import phonePageReducer from "./phonePageReducer";

const createRootReducer = history =>  combineReducers({
   phones: phonesReducer,
   phonePage: phonePageReducer,
   router: connectRouter(history),
});


export default createRootReducer;
