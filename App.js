import React, { Component } from "react";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers/stores'
import thunk from "redux-thunk";
import AppNavigator from "./src/naivigator/AppNavigator";

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
        <AppNavigator/>
      </Provider>
    )
  }
}
