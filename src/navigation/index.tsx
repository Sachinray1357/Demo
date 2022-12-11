import AuthStack from './AuthStack';
import React from 'react';
import UserStack from './UserStack';
import { useAuth } from '../auth-hooks/useAuth';

export default function RootNavigation() {
    const { user } = useAuth();
    console.log('user---', user);


    return user ? <UserStack /> : <AuthStack />;
}