import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
// import BackArrow from '../../assets/coins/backarrow.svg';
// import TickIcon from '../../assets/coins/TickIcon.svg';
import {login} from '../../src/store/auth/action';
// import {getFavourites} from '../../store/favourite/action';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: '#F8F9FB', width: '100%', height: '100%'}}>
      <View style={styles.headerView}>
        {/* <TouchableOpacity onPress={() => Actions.pop()}>
          <BackArrow fill="#A09FB0" width={20} height={20} />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.headerText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={{width: 350, height: 40}}>
          <Text style={{fontSize: 20, paddingLeft: 10, color: '#2A2A2A'}}>
            Log In
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>EMAIL</Text>
        </View>
        <View style={styles.firstView}>
          <TextInput
            placeholder="Please enter email"
            onChangeText={value => {
              setEmail(value);
            }}
            value={email}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Password</Text>
        </View>
        <View style={styles.firstView}>
          <TextInput
            secureTextEntry={true}
            placeholder="Please enter password"
            onChangeText={value => {
              setPassword(value);
            }}
            value={password}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          {/* <TickIcon fill="#A09FB0" width={20} height={20} /> */}
          <Text style={{marginLeft: 10, color: '#3A7AEE', fontSize: 15}}>
            Forget password?
          </Text>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              login({
                password,
                userName: email,
              }),
            );
            // dispatch(getFavourites());
          }}>
          <View style={styles.registerBtn}>
            <Text style={{color: '#FFFFFF'}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    width: 320,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 23,
    marginRight: 23,
    marginTop: 15,
    marginBottom: 20,
  },
  headerText: {
    color: '#3A7AEE',
    fontSize: 15,
    marginLeft: 15,
  },
  firstView: {
    width: 320,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 12,
    color: '#062D4C',
  },
  textView: {
    width: 320,
    marginBottom: 10,
  },
  text: {
    color: '#818386',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  registerBtn: {
    width: 320,
    height: 50,
    backgroundColor: '#3A7AEE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // marginTop: '80%',
    borderWidth: 1,
    borderColor: '#4285FF',
  },
});

export default Login;
