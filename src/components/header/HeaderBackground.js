import {StyleSheet, View} from "react-native";
import React from "react";

const HeaderBackground = () => {
    return (
        <View style={styles.headerBackground} />
    )
}

export default HeaderBackground;

const styles = StyleSheet.create({
    headerBackground: {
        backgroundColor: 'rgba(70,41,0,0.8)',
        width: '100%',
        height: '100%',
    },
})