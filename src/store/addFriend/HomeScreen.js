import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Register from '../../login/Register';
import Login from '../../login/Login';
import VerifyOtp from '../../login/VerifyOtp';

const HomeScreen = ({navigation}) => {
  const friends = useSelector(state => state.friendsReducer);
  console.log(friends);
  return (
    <View style={styles.container}>
      <Text>You have {friends.current.length} friends</Text>

      <Button
        title="Add some friends"
        onPress={() => navigation.navigate('FriendsScreen')}
      />
      <Button
        title="CounterScreen"
        onPress={() => navigation.navigate('Counter')}
      />
      <TouchableOpacity
        style={styles.loginStyle}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerStyle}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '10%',
    backgroundColor: 'green',
  },
  registerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '20%',
    backgroundColor: 'green',
  },
  loginText: {
    fontSize: 20,
    color: 'white',
  },
});

// const mapStateToProps = state => {
//   const {friends} = state;
//   return {friends};
// };

export default HomeScreen;
