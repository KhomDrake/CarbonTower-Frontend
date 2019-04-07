import React, { Component } from 'react';
import Home from './pags/main/home';
import Login from './pags/users/login/Login';
import Signup from './pags/users/signup/TesteSignup';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/login' render={() => (
            <div className="App">
              <Login />
            </div>
          )}/>
          <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <Signup />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;