import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Home} from '../screen/home';
import {DetailCard} from '../screen/detailsCard/'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class AppContainer extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Details" component={DetailCard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
