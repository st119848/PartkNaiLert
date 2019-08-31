import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import IconButton from "./IconButton";

const HamburgerButton = props => {
    const {onPress} = props;
    return (
        <IconButton onPress={onPress} iconName="menu" type="entypo" style={styles.icon} />
    )
};

export default HamburgerButton;

const styles = StyleSheet.create({
    icon: {
        color: 'rgb(125, 105 , 87)',
    }
});