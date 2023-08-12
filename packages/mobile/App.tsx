import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {msg,logFxn,SharedUIComponent } from 'shared'
import { configureRootStore } from 'shared/store'
import { Provider } from 'react-redux'
type Props = {}
const store = configureRootStore()
const App = (props: Props) => {
  return (
      <Provider store={store}>
          <View style = {styles.mainContainer}>
              <Text style = {styles.heading}>From React Native</Text>
              <Text style = {styles.heading}>{msg}</Text>
              <Text onPress = {logFxn} style = {styles.heading}>Press me and see log</Text>
              <SharedUIComponent onPress = {() => {
                  console.log("Called from mobile")
              }} />
          </View>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#489327'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#bbb213'
  }
})
