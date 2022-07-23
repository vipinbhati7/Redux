import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import {Formik} from 'formik';
// import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import {validateOtp} from '../../src/store/register/action';
// import BackArrow from '../../assets/coins/backarrow.svg';
// import TickIcon from '../../assets/coins/TickIcon.svg';

const VerifyOtp = props => {
  const [mobileOtp, setMobilOtp] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  console.log('registerpros', props);

  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: '#F8F9FB', width: '100%', height: '100%'}}>
      <View style={styles.headerView}>
        {/* <TouchableOpacity
          onPress={() =>
            // props.homeName == 'BuySell' ? Actions.buySell() : Actions.registerLogin()
            Actions.pop()
          }>
          <BackArrow fill="#A09FB0" width={20} height={20} />
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => Actions.login()}>
          <Text style={styles.headerText}>Login</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.container}>
        <View style={{width: 350, height: 40}}>
          <Text style={{fontSize: 20, paddingLeft: 10, color: '#2A2A2A'}}>
            Please Verify Otp
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>EMAIL</Text>
        </View>
        <View style={styles.firstView}>
          <TextInput
            placeholder="Please enter email Otp"
            onChangeText={text => setEmailOtp(text)}
            value={emailOtp}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Mobile</Text>
        </View>
        <View style={styles.firstView}>
          <TextInput
            placeholder="Please enter mobile Otp"
            onChangeText={text => setMobilOtp(text)}
            value={mobileOtp}
          />
        </View>
      </View>

      {/* <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <TickIcon fill="#A09FB0" width={20} height={20} />
          <Text style={{marginLeft: 10, color: '#6B6B6B', fontSize: 15}}>
            I agree to BitFi's Terms & conditions
          </Text>
        </View>
      </View> */}

      <TouchableOpacity
        onPress={() => {
          dispatch(
            validateOtp({
              email: props.route.params.email,
              mobile: props.route.params.mobile,
              userName: props.route.params.userName,
              password: props.route.params.password,
              emailOtp: parseInt(emailOtp),
              mobileOtp: parseInt(mobileOtp),
              firstName: props.route.params.firstName,
              lastName: props.route.params.lastName,
            }),
          );
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.registerBtn}>
            <Text style={{color: '#FFFFFF'}}>Submit</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    marginTop: '30%',
    borderWidth: 1,
    borderColor: '#4285FF',
  },
});

export default VerifyOtp;
