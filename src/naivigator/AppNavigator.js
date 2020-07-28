import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoadingScreen from "./AuthloadingScreen";
import MenuNavigator from "./MenuNavigator"
import InitialScreen from "./InitialScreen"
import AsyncStorage from "@react-native-community/async-storage";
import {settingLanguage} from "../reducers/actions/setting";
import ARScreen from "../screens/ARScreen";
import BeaconContentScreen from "../screens/BeaconContentScreen";

const RootStack = createStackNavigator();
const LoadingStack = createStackNavigator();
const InitStack = createStackNavigator();
const MainStack = createStackNavigator();

const AppNavigator = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isIniting, setIniting] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        AsyncStorage.getItem('selectedLanguage').then((selectedLanguage) => {
            if(selectedLanguage && (selectedLanguage !== null)) {
                dispatch(settingLanguage(selectedLanguage))
                setIniting(false)
            } else {
                setIniting(true)
            }
            setIsLoading(false)
        });
    }, []);
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {isLoading && <LoadingNavigator />}
                {(!isLoading && isIniting) && <InitNavigator setIniting={setIniting} />}
                {(!isLoading && !isIniting) && <MainNavigator />}
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator;

const LoadingNavigator = () => {
    return (
        <LoadingStack.Navigator headerMode="none">
            <LoadingStack.Screen
                name="AuthLoading"
                component={AuthLoadingScreen}
            />
        </LoadingStack.Navigator>
    )
}

const InitNavigator = ({setIniting}) => {
    return (
        <InitStack.Navigator headerMode="none">
            <InitStack.Screen name="Init" component={InitialScreen} initialParams={{setIniting}} />
        </InitStack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <MainStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Main" component={MenuNavigator} />
            <RootStack.Screen name="AR" component={ARScreen} />
            <RootStack.Screen name="BeaconDetail" component={BeaconContentScreen} />
        </MainStack.Navigator>
    )
}

