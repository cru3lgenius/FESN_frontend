import React, { Component } from 'react';
import {configureStore} from '../store/index';
import {Provider} from 'react-redux';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="onboarding">

        </div>
      </Provider>
    );
  }
}

export default App;
