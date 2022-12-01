import 'react-native-gesture-handler';
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Routes } from "./src/Navigation/Routes";
import { notificationListener, requestUserNotificationPermission } from './src/utils/notificationService';


const App = () => {
  useEffect(()=>{
   requestUserNotificationPermission()
   notificationListener()
  },[])
  return (
    <View style={{ flex: 1 }} >
      <Routes />
    </View>
  );
};

export default App;