import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Login from './components/Login'
import SignUp from './components/Signup'
import SellerForm from './components/SellerForm'
import Navigation from './components/Navigation'
import UserProfile from './components/UserProfile'
import Item from './components/Item'
import PrivateRoute from './utils/PrivateRoute'

function App() {

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/" component={Login} title="Home"/>
        <Route path="/signup" component={SignUp} title="Sign Up"/>
        <Route path="/sellerform" component={SellerForm} title="Seller Form"/>
        <PrivateRoute path="/profile" component={UserProfile} title="Dashboard"/>
        <Route path='/items/:itemID' component={Item}></Route>

      </Switch>
    </div>
  );
}

export default App;
