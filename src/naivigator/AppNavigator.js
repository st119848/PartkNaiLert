import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from "./AuthloadingScreen";
import MainNavigator from "./MainNavigator"

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            Main: MainNavigator,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);

export default AppNavigator;