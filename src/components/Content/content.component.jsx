import React from 'react';

import './content.styles.scss';
import { BrowserRouter as Router, Switch, Route, link} from "react-router-dom"; 

import Dashboard from '../../Pages/Dashboard/dashboard.component';
import Stealth from '../../Pages/Stealth/stealth.component';
import Action from '../../Pages/Action/Action.component';
import Adventure from '../../Pages/Adventure/adventure.component';
import Stats from '../../Pages/Stats/stats.component';


const Content = () => (
    
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/stealth" component={Stealth}/>
        <Route exact path="/action" component={Action}/>
        <Route exact path="/adventure" component={Adventure}/>
        <Route exact path="/stats" component={Stats}/>
    </Switch>

)

export default Content;