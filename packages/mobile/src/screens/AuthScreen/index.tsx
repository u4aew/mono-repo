import React from 'react'
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { start } from 'shared/store/features/register/slice'

const AuthScreen = () => {
    const dispatch = useDispatch()

    const onPress = async () => {
         try {
             const data = await dispatch(start('ersa'))
         } catch (e) {
             console.warn(e)
         }
    }

    return <View>
        <Button title='Нажми на меня' onPress={onPress} />
    </View>
}

export default AuthScreen
