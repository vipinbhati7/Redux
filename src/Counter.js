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
import {useDispatch, useSelector} from 'react-redux';
import {incrementCounter, decrementCounter} from './store/countReducer/Action';

const Counter = ({navigation}) => {
  const count = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="increament"
        onPress={() => {
          dispatch(incrementCounter());
        }}
      />
      <Text style={styles.text}>{count}</Text>
      <Button title="decrement" onPress={() => dispatch(decrementCounter())} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Counter;
