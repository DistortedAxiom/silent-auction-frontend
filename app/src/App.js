import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.scss';
import Navigation from './components/Navigation';
import ItemCreate from './components/items/ItemCreate';
import ItemDelete from './components/items/ItemDelete';
import ItemEdit from './components/items/ItemEdit';
import ItemList from './components/items/ItemList';

const App = () => {
  return (
    <div className='ui container'>
      <Navigation />
      <Switch>
        <PrivateRoute exact path='/items/list' component={ItemList} />
        <Route path='/register' component={Signup} />
        <Route exact path='/' component={Login} />
        <Route path='/items/new' component={ItemCreate} />
        <Route path='/items/delete/:id' component={ItemDelete} />
        <Route path='/items/edit/:id' component={ItemEdit} />
      </Switch>
    </div>
  );
}

export default App;