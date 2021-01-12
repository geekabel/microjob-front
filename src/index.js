import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Contact from './components/Contact';
import Search from './components/Search';

const Root =() =>(
  <Router>
    <Switch>
    <Route component={App} exact path="/"/>
    <Route component={Signin} path="/signin"/>
    <Route component={Signup} path="/signup"/>
    <Route component={Contact} path="/contact"/>
    <Route component={Search} path="/search"/>
    </Switch> 
  </Router> 
)
ReactDOM.render( <React.StrictMode> <Root /></React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
