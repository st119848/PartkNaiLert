import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import Icon from "./Icon";

const BeaconStatusIcon = () => {
    return (
        <View style={styles.container}>
            <BeaconIcon />
            <Label />
            <StatusIcon />
        </View>
    )
};

export default BeaconStatusIcon;

const BeaconIcon = props => {
    return (
        <View style={styles.iconContainer}>
            <Icon style={styles.icon} name="rss" size={18} type="entypo" />
        </View>
    )
};

const Label = () => {
    return (
        <Text style={styles.label}>Beacons</Text>
    )
};

const StatusIcon = props => {
    return (
        <Icon name="check" size={10} style={styles.statusIcon}/>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        position: 'relative',
    },
    iconContainer: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(125, 105 , 87)',
        borderRadius: 14,
        borderWidth: 1,
    },
    icon: {
        color: 'rgb(125, 105 , 87)',
    },
    label: {
        color: 'rgb(125, 105 , 87)',
        fontSize: 11,
        marginBottom: 5
    },
    statusIconContainer: {

    },
    statusIcon: {
        color: 'white',
        padding: 1,
        backgroundColor: 'rgb(205, 94, 90)',
        position: 'absolute',
        top: 0,
        right: 2,
    }
});




