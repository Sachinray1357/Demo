import { Text, View } from 'react-native';
import { getAuth, signOut } from "firebase/auth";

import Colors from '../../assets/colors/Colors';
import CustomButton from '../../components/CustomButton';
import React from 'react';
import styles from './styles';
import { useAuth } from '../../auth-hooks/useAuth';

const auth = getAuth();

const HomeScreen = (props:any) => {
    const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={{color:Colors.black, fontWeight:'bold', fontSize:18,bottom:70}}>Welcome {user?.email}!</Text>
      <CustomButton
      activeOpacity={0.5}
      title={"Got to Todo Screen"}
      onPress={() => props.navigation.navigate('Todo')}
      />

      <CustomButton
      styles={{top:20}}
      activeOpacity={0.5}
      title={"SIGNOUT"}
      onPress={() => signOut(auth)}
      />
    </View>
  )
}

export default HomeScreen;