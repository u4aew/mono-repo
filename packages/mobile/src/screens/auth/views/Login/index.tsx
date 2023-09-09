import React from 'react'
import { StyleSheet, View } from "react-native";
import LoginForm from "../../components/LoginForm";

const AuthScreen = () => {
    return <View  style={style.screen}>
        <LoginForm />
    </View>
}


const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
})

export default AuthScreen
