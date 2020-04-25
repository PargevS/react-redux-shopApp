import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Phones from "./containers/Phones";


const BasketPage = () => (<h2>Basket</h2>);

const routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Phones} />
            <Route path='/basket' exact component={BasketPage} />
        </Switch>
    );
}


export default routes;
