import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Icon from "../../../components/Icon";

const BeaconsStatus = () => {
    return (
        <View style={styles.container}>
            <BeaconIcon />
            <Title />
            <StatusIcon />
        </View>
    )
};

export default BeaconsStatus;

const BeaconIcon = () => {
    return (
        <Icon style={styles.beaconIcon} type="entypo" name="rainbow" size={25} />
    )
};

const Title = () => {
    return (
        <Text style={styles.beaconTitle}>
            Beacons
        </Text>
    )
};

const StatusIcon = () => {
    return (
        <Icon style={styles.statusIcon} name="checkcircleo" size={18} />
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 50,
        width: 300,
        marginHorizontal: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        position: 'relative',
        borderRadius: 4,
        borderColor: '#000',
        backgroundColor: 'white'
    },
    beaconIcon: {
        color: 'rgb(125, 105 , 87)',
        paddingHorizontal: 10,
    },
    beaconTitle: {
        color: 'rgb(125, 105 , 87)',
    },
    statusIcon: {
        position: 'absolute',
        right: 15,
        color: 'green'
    }
});