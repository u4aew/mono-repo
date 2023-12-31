import React from 'react'
import {View} from "react-native";
import {TextInput, StyleSheet, Text} from "react-native";

type Props = {
    label: string;
}

const Input = ({label, ...props}: Props) => {
    return <View style={style.box}>
        {label && <View style={style.label}>
            <Text style={style.labelCaption}> {label} </Text>
        </View>}
        <View>
            <TextInput {...props} style={style.input}/>
        </View>
    </View>
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
