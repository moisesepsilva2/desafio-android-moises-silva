import React from 'react'
import { StatusBar, Platform } from 'react-native'
import Home from './src/telas/Home'
import Description from './src/telas/Description'
import { StackNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack'
//import { StackNavigator, createAppContainer } from 'react-navigation';

const App = StackNavigator({
  Home: {
    screen: Home
  },
  Description: {
    screen: Description
  },
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default App