import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { 
  Container
} from 'react-bootstrap';

import NavigationBar from './components/NavigationBar/NavigationBar';

import Models from './pages/Models/Models';
import ModelDetails from './pages/Models/Details/ModelDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container fluid={true}>
        <Switch>
          <Route
            exact path='/models'
            component={Models}
          />
          <Route
            exact path='/models/:name'
            component={ModelDetails}
          />
          <Redirect to='/models' />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
