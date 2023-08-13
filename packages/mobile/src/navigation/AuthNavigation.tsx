import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';

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
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
        </Stack.Navigator>
    );
};

export default Index;
