import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router} from 'react-router-dom';
// ************************************
import './index.scss';
import store from "./redux/store";
import routes from "./routes";


const history = createBrowserHistory();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <ConnectedRouter history={history}>
                    {routes()}
                </ConnectedRouter>
            </Router>
        </Provider>
    ),
    document.querySelector('#root')
);
