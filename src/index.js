import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import './config/reactotron';
import AppNavigator from './routes';

// APP ID: 821755b9
// APP KEY: 809f0a314ed07c214091764040e60d6c

class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
