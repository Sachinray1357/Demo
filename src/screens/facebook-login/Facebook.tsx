import 'firebase/firestore'

import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Colors from '../../assets/colors/Colors';
import CustomButton from '../../components/CustomButton';
import { async } from '@firebase/util';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const FacebookLogin = () => {

    const [fbUser, setFbUser] = useState();
    console.log('fbUser', fbUser);

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 18, bottom: 30 }}>Facebook</Text>
            <CustomButton
                activeOpacity={0.5}
                title={"Facebook"}
                onPress={() => onFacebookButtonPress().then((res) => {
                    console.log('res--', res);
                }).catch(error => console.log('error', error)
                )}
            />
        </View>
    )
}

export default FacebookLogin;