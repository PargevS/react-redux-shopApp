import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
// ********************************************
import phonesReducer from "./phonesReducer";
import phonesPageReducer from "./phonesPageReducer";
import phonePageReducer from "./phonePageReducer";

const createRootReducer = history =>  combineReducers({
   phones: phonesReducer,
   phonesPage: phonesPageReducer,
   phonePage: phonePageReducer,
   router: connectRouter(history),
});


export default createRootReducer;
