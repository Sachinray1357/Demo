import { FacebookLogin, LoginScreen, RegisterScreen, WelcomeScreen } from '../screens/index';

import NavigationComponentName from '../constants/NavigationComponentName';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MainStackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>

                <Stack.Screen
                    name={NavigationComponentName.WELCOME}
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name={NavigationComponentName.REGISTER}
                    component={RegisterScreen}
                />
                <Stack.Screen
                    name={NavigationComponentName.LOGIN}
                    component={LoginScreen}
                />

                <Stack.Screen
                    name={NavigationComponentName.FACEBOOK}
                    component={FacebookLogin}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
