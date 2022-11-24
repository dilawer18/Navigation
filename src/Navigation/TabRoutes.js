import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
import {
    Explore,
    Home,
    profile
} from '../Screens'
import imagePath from '../constants/imagePath';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (

        <Tab.Navigator initialRouteName={NavigationStrings.HOME}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'red',
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position:'absolute',
                    backgroundColor: '#ADD8E6',
                    // borderRadius:50,
                    // bottom:20,
                    // marginHorizontal:16

                }
            }}>
            <Tab.Screen name={NavigationStrings.HOME} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={imagePath.icHome}
                                style={{ tintColor: focused ? 'blue' : 'pink' }} />
                        )
                    }
                }} />
            <Tab.Screen name={NavigationStrings.PROFILE} component={profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={imagePath.icProfil}
                                style={{ tintColor: focused ? 'blue' : 'pink' }} />
                        )
                    }
                }} />

            <Tab.Screen name={NavigationStrings.EXPLORE} component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={imagePath.icExplore}
                                style={{ tintColor: focused ? 'blue' : 'pink' }} />
                        )
                    }
                }} />

        </Tab.Navigator>

    )
}
export default TabRoutes