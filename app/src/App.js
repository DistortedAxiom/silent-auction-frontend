import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Login from './components/Login'
import SignUp from './components/Signup'
import SellerForm from './components/SellerForm'
import Navigation from './components/Navigation'
import UserProfile from './components/UserProfile'
import PrivateRoute from './utils/PrivateRoute'

function App() {

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/sellerform" component={SellerForm} />
        <PrivateRoute path="/profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
