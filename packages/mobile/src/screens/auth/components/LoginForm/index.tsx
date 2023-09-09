import React, {useCallback, useState} from 'react'
import {View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import InputPhone from "../../../../components/InputPhone";
import Button from "../../../../components/Button";

const LoginForm = () => {
    const [phone, setPhone] = useState<string>('')
    const onChangePhone = useCallback((value: string) => {
        setPhone(value)
    }, [setPhone])

    return <KeyboardAvoidingView keyboardVerticalOffset={60} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.form}>
        <View style={style.inputs}>
            <View style={style.input}>
                <InputPhone autoFocus onChange={onChangePhone} value={phone} label={'Phone'}/>
            </View>
        </View>
        <View style={style.action}>
            <Button onPress={console.log} text={'Получить код'}/>
        </View>
    </KeyboardAvoidingView>
}

const style = StyleSheet.create({
    form: {
        flex: 1,
    },
    inputs: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginBottom: 15
    },
    action: {
        marginBottom: 15
    },
})
export default LoginForm
