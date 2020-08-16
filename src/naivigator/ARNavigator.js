import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import ScanTheObject1 from "../screens/ARScanner/ScanTheObject1";
import ScanTheObject2 from "../screens/ARScanner/ScanTheObject2";
import ScanTheObject3 from "../screens/ARScanner/ScanTheObject3";
import ScanTheObject4 from "../screens/ARScanner/ScanTheObject4";
import ScanTheObject5 from "../screens/ARScanner/ScanTheObject5";
import ScanTheObject6 from "../screens/ARScanner/ScanTheObject6";
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "../components/Icon";

const ARStack = createStackNavigator();

const ARNavigator = ({navigation}) => {
    const handleClose = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ARStack.Navigator headerMode="none">
                    <ARStack.Screen name="ScannerZone1" component={ScanTheObject1}/>
                    <ARStack.Screen name="ScannerZone2" component={ScanTheObject2}/>
                    <ARStack.Screen name="ScannerZone3" component={ScanTheObject3}/>
                    <ARStack.Screen name="ScannerZone4" component={ScanTheObject4}/>
                    <ARStack.Screen name="ScannerZone5" component={ScanTheObject5}/>
                    <ARStack.Screen name="ScannerZone6" component={ScanTheObject6}/>
                </ARStack.Navigator>
            </View>
            <ARHeader onCloseClick={handleClose}/>
        </View>
    )
}

export default ARNavigator;

const ARHeader = props => {
    const {onCloseClick} = props
    return (
        <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity onPress={onCloseClick}>
                <Icon name="close" style={styles.closeButton} size={35} />
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.9,
        position: 'relative',
    },

    headerContainer: {
        width: 49,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    closeButton: {
        color: 'white',
        paddingHorizontal: 10,
    },
});