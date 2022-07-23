/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Counter from './src/Counter';
import {connect, Provider} from 'react-redux';
import store from './src/store/store';
import HomeScreen from './src/store/addFriend/HomeScreen';
import FriendsScreen from './src/store/addFriend/FriendsScreen';
import Register from './src/login/Register';
import Login from './src/login/Login';
import VerifyOtp from './src/login/VerifyOtp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
