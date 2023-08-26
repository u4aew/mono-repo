import React, { useState } from 'react'
import { View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { TextInput, StyleSheet, Text } from 'react-native';
import AuthForm from "./components/AuthForm";

const AuthScreen = () => {
    const [text, setText] = useState('das')
    const dispatch = useDispatch()
    return <View>
        <AuthForm />
        <Button title='Нажми на 234' onPress={console.log} />
        <View>
            <TextInput placeholder={'sdaas'} />
        </View>
    </View>
}

export default AuthScreen
