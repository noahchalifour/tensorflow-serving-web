import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';

import Models from './pages/Models/Models';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path='/models'>
          <Models />
        </Route>
        <Redirect to='/models' />
      </Switch>
    </Router>
  );
}

export default App;
