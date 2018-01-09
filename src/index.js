import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './config/reactotron';
import AppNavigator from './routes';
import reducers from './reducers';

// APP ID: 821755b9
// APP KEY: 1d3f631a8a7cff11f9606ecd2b9adbe3

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
