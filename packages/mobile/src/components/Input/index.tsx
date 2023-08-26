import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const Input = () => {
    return (
      <View>
          <TextInput style={styles.input}/>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        paddingLeft: 20,
        flex: 1
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
});

export default Input;
