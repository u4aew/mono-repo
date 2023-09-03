import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/views/Login';

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default Index;
