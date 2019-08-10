import React, { Component } from "react";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { View, Text, } from "react-native";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers/stores'
import thunk from "redux-thunk";

import AuthLoadingScreen from './src/naivigator/AuthloadingScreen'
import DrawerNavigator from './src/naivigator/DrawerNavigator'

import SetLanguageScreen from './src/screens/SetLanguageScreen'

  const AuthStack = createStackNavigator(
    {
      SetLanguage: {
        screen: SetLanguageScreen,
      }
    },{
      headerMode: "none"
    }
  )

const Naivigators = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: DrawerNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));



const store = createStore(
  rootReducer,
  applyMiddleware(
    // createLogger(),
    thunk
  )
);




export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Naivigators/>
      </Provider>
    )
  }
}
