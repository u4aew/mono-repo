import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/views/Login';
import {View, Text, StyleSheet} from "react-native";
const Stack = createNativeStackNavigator();

const CustomHeader = ({ title }: any) => (
    <View style={styles.customHeader}>
        <Text style={styles.customTitle}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    customHeader: {
        paddingTop: 30,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    customTitle: {
        fontWeight: 'bold',
    }
});


const Index = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    header: () => <CustomHeader title="Номер телефона" />
                }}
            />
        </Stack.Navigator>
    );
};

export default Index;
