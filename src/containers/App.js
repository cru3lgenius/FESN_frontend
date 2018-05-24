import React, { Component } from 'react';
import {configureStore} from '../store/index';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Navbar from './Navbar';
import Main from './Main';
import {setAuthorizationToken,setCurrentUser} from '../store/actions/auth';


const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (error) {
    store.dispatch(setCurrentUser({}))
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="onboarding">
            <Navbar/>
            <Main/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
