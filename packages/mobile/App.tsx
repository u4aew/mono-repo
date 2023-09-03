import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from "./src/store";
import { Provider, useDispatch } from 'react-redux'
import AppNavigator from "./src/navigations/AppNavigation";
type Props = {}

const App = (props: Props) => {
  return (
      <Provider store={store}>
          <AppNavigator />
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
