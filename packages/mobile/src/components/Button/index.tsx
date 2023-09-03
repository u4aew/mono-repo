import React from 'react'
import {TouchableOpacity, Text, StyleSheet, GestureResponderEvent} from "react-native";

type Props = {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
}

const Button = ({text, onPress}: Props) => {
    return <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onPress}><Text style={styles.label}>{text}</Text></TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#f4511e',
        borderRadius: 15
    },
    label: {
        textAlign: 'center',
        color: 'white'
    }
})

export default Button
