import React, { Component } from "react";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './src/reducers/stores'
import thunk from "redux-thunk";
import AppNavigator from "./src/naivigator/AppNavigator";
import AsyncScreens from "./src/screens/AsyncScreens";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
        <AsyncScreens />
      </Provider>
    )
  }
}
