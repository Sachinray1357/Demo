import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { height, width } from '../../styles/Dimension';

import Colors from '../../assets/colors/Colors';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Icons from '../../constants/Icons';
import StraightLine from '../../components/StraightLine';
import styles from './styles';

const auth = getAuth();

const LoginScreen = (props: any) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [value, setValue] = useState({
        email: "",
        password: "",
        error: "",
    });

    async function onSignIn() {
        if (value.email === "" || value.password === "") {
            setValue({
                ...value,
                error: "Email and password are mandatory.",
            });
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, value.email, value.password);
            Alert.alert('Logged In');
            // props.navigation.navigate('Todo')
        } catch (error: any) {
            setValue({
                ...value,
                error: error.message,
            });
        }
    }

    const passwordVisibility = () => {
        if (!isVisible) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    console.log('email---', value.email,);
    console.log('password---', value.password,);
    console.log('error---', value.error,);


    return (
        <View style={styles.container}>
            <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 18, bottom: 30 }}>Login on Todo App</Text>
            {!!value.error && <View style={styles.error}><Text style={{ color: 'red' }}>{value.error}</Text></View>}
            <View style={{ width: width, height: height * 0.25, justifyContent: 'center', }}>
                <CustomInput
                    styles={{ borderColor: Colors.white }}
                    placeHolderTitle="Email"
                    placeholderColor={Colors.black}
                    keyboardType='email-address'
                    value={value.email}
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
                title={"LOGIN"}
                onPress={onSignIn}
            />
            <StraightLine
                styles={{ top: 15 }}
                title='Or' />

            <CustomButton
                activeOpacity={0.5}
                styles={{ top: 20 }}
                title={"LOGIN WITH FACEBOOK"}
                onPress={() => props.navigation.navigate('FacebookLogin')}
            />
            <View style={styles.signupButton} >
                <Text style={{ fontWeight: 'normal', fontSize: 15, color: 'gray' }}>Dont't have an account ?</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('RegisterScreen')}>
                <Text style={{color:Colors.headerColor, fontWeight:'bold', fontSize:20, textDecorationLine:'underline'}}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;