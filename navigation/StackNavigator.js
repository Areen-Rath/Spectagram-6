import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';
import Post from '../screens/Post';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
    );
}

export default StackNavigator;