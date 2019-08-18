import React from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import Icon from "./Icon";

const BannerButton = (props) => {
    const {onPress, iconName, text, type='antd'} = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={iconName} type={type} style={styles.icon} size={25} />
            </View>
            <Text style={styles.iconText}>{text}</Text>
        </TouchableOpacity>
    );
};



export default BannerButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    iconContainer: {
        marginHorizontal: 10,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'white',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    },
    icon: {
        color: 'gray',
    },
    iconText: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        textShadowColor: "#000",
        textShadowRadius: 1,
        letterSpacing: 1,
    }
});

