import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
// ************************************
import store from "./redux/store";
import Layout from "./containers/Layout";


const history = createBrowserHistory();

ReactDOM.render(
    (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Layout/>
            </ConnectedRouter>
        </Provider>
    ),
    document.querySelector('#root')
);
