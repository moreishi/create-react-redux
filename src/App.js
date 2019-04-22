import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Applications from './components/Applications';
import Remittance from './components/Remittance';
import MobileRegister from './components/Sms2Signup';
import Error from './components/Error';
import './App.scss';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/applications" component={Applications} />
            <Route exact path="/applications/remittance" component={Remittance} />
            <Route exact path="/applications/mobile-register" component={MobileRegister} />
            <Route component={Error} />
        </Switch>
    );
  }
}

export default App;
