import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { height, width } from '../../styles/Dimension';

import Colors from '../../assets/colors/Colors';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Icons from '../../constants/Icons';
import StraightLine from '../../components/StraightLine';
import styles from './styles';

const WelcomeScreen = (props:any) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 18, bottom: 30 }}>Welcome to Todo App</Text>
            <CustomButton
                activeOpacity={0.5}
                styles={{bottom:10}}
                title={"Login to Todo"}
                onPress={()=>props.navigation.navigate('LoginScreen')}
            />
            <CustomButton
                activeOpacity={0.5}
                title={"Signup to Todo"}
                onPress={()=>props.navigation.navigate('RegisterScreen')}
            />
        </View>
    )
}

export default WelcomeScreen;