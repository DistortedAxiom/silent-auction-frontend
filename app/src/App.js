import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Login from './components/Login'
import SignUp from './components/Signup'
import SellerForm from './components/SellerForm'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/sellerform">
        <SellerForm />
      </Route>
    </div>
  );
}

export default App;
