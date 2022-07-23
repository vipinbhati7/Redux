import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
// import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import {registerOtp} from '../../src/store/register/action';
import * as Yup from 'yup';
// import BackArrow from '../../assets/coins/backarrow.svg';
// import TickIcon from '../../assets/coins/TickIcon.svg';
// import {actionTypes} from '../../store/listMarketData/action';
// import {ScrollView} from 'react-native-gesture-handler';
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(41, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(3, 'Too Short!')
    .max(41, 'Too Long!')
    .required('Required'),
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(41, 'Too Long!')
    .required('*mantaroy'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'too weak password!')
    .max(15, 'strong password!')
    .required('Please enter password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const isOtpGenerated = useSelector(state => state.register.otpGenerated);
  const isOtpCheck = useSelector(state => state.register);
  const [isOtpGeneratedType, setIsOtpGeneratedType] = useState();

  return (
    <ScrollView>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}>
        {({
          errors,
          touched,
          values,
          handleChange,
          setFieldTouched,
          setFieldValue,
        }) => (
          <View
            style={{backgroundColor: '#F8F9FB', width: '100%', height: '100%'}}>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={() => Actions.login()}>
                <Text style={styles.headerText}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <View style={{width: 350, height: 40}}>
                <Text style={{fontSize: 20, paddingLeft: 10, color: '#2A2A2A'}}>
                  Create an account for fee
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.textView}>
                <Text style={styles.text}> FirstName</Text>
              </View>

              <View style={styles.firstView}>
                <TextInput
                  placeholder="Please enter  first name"
                  onChangeText={text => {
                    setFirstName(text);
                    setFieldValue('firstName', text);
                    // handleChange('firstName');
                  }}
                  onBlur={() => setFieldTouched('firstName')}
                  value={values.firstName}
                  onFocus={() => setFieldTouched('firstName')}
                />
              </View>
              {errors.firstName && touched.firstName ? (
                <Text style={styles.error}>{errors.firstName}</Text>
              ) : null}
            </View>

            <View style={styles.container}>
              <View style={styles.textView}>
                <Text style={styles.text}>Last Name</Text>
              </View>
              <View style={styles.firstView}>
                <TextInput
                  placeholder="Please enter last name "
                  onChangeText={text => {
                    setLastName(text);
                    setFieldValue('lastName', text);
                    // handleChange('firstName');
                  }}
                  onBlur={() => setFieldTouched('lastName')}
                  value={values.lastName}
                  onFocus={() => setFieldTouched('lastName')}
                />
              </View>
              {errors.lastName && touched.lastName ? (
                <Text style={styles.error}>{errors.lastName}</Text>
              ) : null}
            </View>

            <View style={styles.container}>
              <View style={styles.textView}>
                <Text style={styles.text}>Username</Text>
              </View>
              <View style={styles.firstView}>
                <TextInput
                  placeholder="Please enter Username"
                  onChangeText={text => {
                    setUserName(text);
                    setFieldValue('userName', text);
                    // handleChange('firstName');
                  }}
                  onBlur={() => setFieldTouched('userName')}
                  value={values.userName}
                  onFocus={() => setFieldTouched('userName')}
                />
              </View>
              {errors.userName && touched.userName ? (
                <Text style={styles.error}>{errors.userName}</Text>
              ) : null}
            </View>

            <View style={styles.container}>
              <View style={styles.textView}>
                <Text style={styles.text}>EMAIL</Text>
              </View>
              <View style={styles.firstView}>
                <TextInput
                  placeholder="Please enter email"
                  onChangeText={text => {
                    setEmail(text);
                    setFieldValue('email', text);
                    console.log('touched.email', touched.email);
                    // handleChange('email');
                  }}
                  onBlur={() => setFieldTouched('email')}
                  onFocus={() => setFieldTouched('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
              </View>
              {errors.email && touched.email ? (
                <Text style={styles.error}>{errors.email}</Text>
              ) : null}
            </View>

            <View style={styles.container}>
              <View style={styles.textView}>
                <Text style={styles.text}>Mobile</Text>
              </View>
              <View style={styles.firstView}>
                <TextInput
                  placeholder="Please enter mobile no"
                  onChangeText={text => setMobile(text)}
                  value={mobile}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.textView}>
                <Text style={styles.text}>Password</Text>
              </View>
              <View style={styles.firstView}>
                <TextInput
                  placeholder="Please enter password "
                  secureTextEntry={true}
                  onChangeText={text => {
                    setPassword(text);
                    setFieldValue('password', text);
                    // handleChange('firstName');
                  }}
                  onBlur={() => setFieldTouched('password')}
                  value={values.password}
                  onFocus={() => setFieldTouched('password')}
                />
              </View>
              {errors.password && touched.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : null}
            </View>

            <View style={styles.container}>
              <View style={styles.bottomContainer}>
                {/* <TickIcon fill="#A09FB0" width={20} height={20} /> */}
                <Text style={{marginLeft: 10, color: '#6B6B6B', fontSize: 15}}>
                  I agree to BitFi's Terms & conditions
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                // onPress={() => Actions.verifyOtp()}
                onPress={() => {
                  dispatch(
                    registerOtp({
                      email,
                      mobile,
                      firstName,
                      lastName,
                      userName,
                      password,
                    }),
                  ),
                    navigation.navigate('VerifyOtp', {
                      email,
                      mobile,
                      firstName,
                      lastName,
                      userName,
                      password,
                    }),
                    console.log('isotpgenerated', isOtpGenerated);

                  // setGeneratedOtp();

                  // dispatch(getFavourites());
                }}>
                <View style={styles.registerBtn}>
                  <Text style={{color: '#FFFFFF'}}>Register</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
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
    // marginTop: '60%',
    borderWidth: 1,
    borderColor: '#4285FF',
    marginBottom: 20,
  },
  error: {
    color: 'red',
  },
});

export default Register;
