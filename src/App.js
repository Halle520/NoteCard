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
import AppContainer from './navigation/AppContainer';


const App = () => {
  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
