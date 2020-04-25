import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from '../screen/home'
import DetailCard from '../screen/detailsCard/DetailCard';
import { createAppContainer } from 'react-navigation';
import Account from '../screen/users/Account';

const Tab = createBottomTabNavigator()

const BottomTab = ()=>{
    return (
        <Tab.Navigator screenOptions={{
            
        }}
        headerMode="none">
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Account' component={Account} options={{headerShown:true}} />
        </Tab.Navigator>
    )
}
export default BottomTab