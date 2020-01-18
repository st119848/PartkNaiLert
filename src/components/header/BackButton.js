import React from 'react';
import {
    StyleSheet,
} from "react-native";
import IconButton from "../IconButton";

const BackButton = (props) => {
    const {onPress} = props;
    return (
        <IconButton onPress={onPress} iconName="left" size={35} style={styles.icon} />
    )
};

export default BackButton;

const styles = StyleSheet.create({
    icon: {
        color: 'white',
        height: 35,
        width: 35,
    }
});