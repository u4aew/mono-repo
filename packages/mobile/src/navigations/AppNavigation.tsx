import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AuthStackScreen from './AuthNavigation';
// import StartupScreen from '../screens/startup/startup';
const AppNavigator = () => {
    // const isAuth = useSelector((state) => !!state.user.token);
    // const didTryAutoLogin = useSelector((state) => state.user.didTryAutoLogin);
    return (
        <NavigationContainer>
            <AuthStackScreen />
        </NavigationContainer>
    );
};

export default AppNavigator;
