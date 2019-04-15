import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Applications from './components/Applications';
import './App.scss';

class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/" exact component={Home} exact />
            <Route path="/applications" exact component={Applications} />
        </Router>
    );
  }
}

export default App;
