import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { height, width } from '../../styles/Dimension';

import Colors from '../../assets/colors/Colors';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Icons from '../../constants/Icons';
import styles from './styles';

const auth = getAuth();

const RegisterScreen = (props: any) => {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: ''
  })

  const passwordVisibility = () => {
    if (!isVisible) {
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
    }
  }

  async function onSignUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      console.log('Signup---');
      props.navigation.navigate('LoginScreen');
    } catch (error: any) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  console.log('email---', value.email,);
  console.log('password---', value.password,);
  console.log('error---', value.error,);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.todoBgColor} />
      <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 18, bottom: 30 }}>Register on Todo App</Text>
      {!!value.error && <View style={styles.error}><Text style={{ color: 'red' }}>{value.error}</Text></View>}
      <View style={{ width: width, height: height * 0.3, justifyContent: 'center', }}>

        <CustomInput
          styles={{ borderColor: Colors.white }}
          placeHolderTitle="Email"
          placeholderColor={Colors.black}
          value={value.email}
          keyboardType='email-address'
          onChangeText={(text: string) => setValue({ ...value, email: text })}
        />

        <CustomInput
          placeHolderTitle='Enter your password'
          secureTextEntry={!isVisible}
          placeholderColor={Colors.black}
          styles={{ borderColor: Colors.white }}
          value={value.password}
          onPress={passwordVisibility}
          onChangeText={(text: string) => setValue({ ...value, password: text })}
          Icon={
            <Icons.Ionicons name={!isVisible ? 'eye-off' : 'eye'} size={22} color={Colors.headerColor} />
          }
        />
      </View>

      <CustomButton
        activeOpacity={0.5}
        styles={{ top: 20 }}
        title={"SIGNUP"}
        onPress={onSignUp}
      />

      <View style={styles.signupButton} >
        <Text style={{ fontWeight: 'normal', fontSize: 15, color: 'gray' }}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={{ color: Colors.headerColor, fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }}> Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default RegisterScreen;