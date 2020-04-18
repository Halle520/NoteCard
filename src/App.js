/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,

  StatusBar,
} from 'react-native';
import {   Provider } from 'react-redux';
import {Home} from './screen/home/';
import { store } from './store';


const App: () => React$Node = () => {
  return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </Provider>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
