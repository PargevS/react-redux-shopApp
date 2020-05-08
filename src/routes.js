import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Phones from "./containers/Phones";
import Phone from './containers/Phone';
import PhonesByProducer from "./containers/PhonesByProducer";


const BasketPage = () => (<h2>Basket</h2>);

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Phones} />
            <Route path='/producers/:id' exact component={PhonesByProducer} />
            <Route path='/phones/:id' component={Phone} />
            <Route path='/basket' exact component={BasketPage} />
        </Switch>
    );
}


export default Routes;
