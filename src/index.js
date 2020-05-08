import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router} from 'react-router-dom';
// ************************************
import './index.scss';
import Routes from "./routes";
import store from './redux/store';
import Header from "./components/Header/Header";


const history = createBrowserHistory();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <ConnectedRouter history={history}>
                    <Header/>
                    <Routes/>
                </ConnectedRouter>
            </Router>
        </Provider>
    ),
    document.querySelector('#root')
);
