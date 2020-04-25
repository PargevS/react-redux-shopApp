import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
// ********************************************
import phonesReducer from "./phonesReducer";

const createRootReducer = history =>  combineReducers({
   phones: phonesReducer,
   router: connectRouter(history),
});


export default createRootReducer;
