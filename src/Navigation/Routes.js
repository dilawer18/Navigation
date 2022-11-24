import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {
//     Explore,
//     Home,
//     profile
// } from '../Screens'
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                {/* <Tab.Screen name={NavigationStrings.PROFILE} component={profile} />
                <Tab.Screen name={NavigationStrings.HOME} component={Home} />
                <Tab.Screen name={NavigationStrings.EXPLORE} component={Explore} /> */}
                {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
