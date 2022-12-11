import { HomeScreen, Todo } from '../screens/index';

import NavigationComponentName from '../constants/NavigationComponentName';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function UserStackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>

                <Stack.Screen
                    name={NavigationComponentName.HOME}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name={NavigationComponentName.TODO}
                    component={Todo}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
