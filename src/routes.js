import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Request from './components/Request/Request';
import Home from './components/Home/Home';
import About from './components/About/About';
import Showcase from './components/Showcase/Showcase';
import Orders from './components/Orders/Orders';
import Edit from './components/Edit/Edit';


  


export default (
    <Switch>
        <Route path="/admin/showcase"  component={Showcase} />
        <Route path="/admin/orders"  component={Orders} />
        <Route path="/request" component={Request} />
        <Route exact path="/"  component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/admin/edit/:id"  component={Edit} />
       
    </Switch>
) 

