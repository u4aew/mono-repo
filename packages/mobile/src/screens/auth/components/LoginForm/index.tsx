import React from 'react'
import {View, StyleSheet} from "react-native";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const AuthForm = () => {
    return <View style={style.form}>
        <View style={style.item}>
            <Input label={'Phone'}/>
        </View>
        <View style={style.item}>
            <Button onPress={console.log} text={'Send'}/>
        </View>
    </View>
}

const style = StyleSheet.create({
    form: {},
    item: {
        marginBottom: 15
    },
    action: {},
})
export default AuthForm
