import React from 'react'
import {View} from "react-native";
import {TextInput, StyleSheet, Text} from "react-native";
import MaskInput from 'react-native-mask-input';

type Props = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    autoFocus?: boolean
}

const Input = ({value, onChange, ...props}: Props) => {
    return <MaskInput
        style={style.input}
        value={value}
        onChangeText={onChange}
        keyboardType="phone-pad"
        mask={['+', '7', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
        {...props}
    />
}


const style = StyleSheet.create({
    box: {},
    label: {
        marginBottom: 5
    },
    labelCaption: {
        fontSize: 12,
        fontWeight: '700'
    },
    input: {
        borderColor: '#e6e6e7',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#e6e6e7'
    }
})

export default Input
