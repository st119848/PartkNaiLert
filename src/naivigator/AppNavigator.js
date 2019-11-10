import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from "./AuthloadingScreen";
import MainNavigator from "./MainNavigator"
import InitialScreen from "./InitialScreen"

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            Init: InitialScreen,
            Main: MainNavigator,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);

export default AppNavigator;