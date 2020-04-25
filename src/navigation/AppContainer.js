import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Home} from '../screen/home';
import {DetailCard} from '../screen/detailsCard/'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EditCard from '../screen/EditCard';
import BottomTab from './TabNavigator';


const Stack = createStackNavigator();

export default class AppContainer extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Tab" >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Details" component={DetailCard} />
          <Stack.Screen name="Edit Card" component={EditCard} />
          <Stack.Screen name='Tab' component={BottomTab} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
