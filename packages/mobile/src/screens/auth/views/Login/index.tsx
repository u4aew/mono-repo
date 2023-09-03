import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import LoginForm from "../../components/LoginForm";

const AuthScreen = () => {
    return <KeyboardAvoidingView  style={style.screen} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <LoginForm />
    </KeyboardAvoidingView>
}


const style = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    form: {}
})

export default AuthScreen
