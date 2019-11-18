import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    Platform
} from 'react-native';
import Icon from "../../../components/Icon";
import beaconBG from '../../../assets/img/beacon_icon_bg.png'
import beaconIcon from '../../../assets/img/beacon_icon.png'

const BeaconsStatus = ({t, isInBeaconZone}) => {
    const title = t('home.labels.beacons');
    return (
        <View style={styles.outterContainer}>
            <ImageBackground source={beaconBG} style={styles.container} imageStyle={styles.imageContainer}>
                <View style={styles.innerContainer}>
                    <BeaconIcon />
                    <Title title={title} />
                </View>
                {isInBeaconZone && <StatusIcon />}
            </ImageBackground>
        </View>
    )
};

export default BeaconsStatus;

const BeaconIcon = () => {
    return (
        <Image source={beaconIcon} style={styles.beaconIcon}/>
    )
};

const Title = ({title}) => {
    return (
        <Text style={styles.beaconTitle}>
            {title}
        </Text>
    )
};

const StatusIcon = () => {
    return (
        <Icon style={styles.statusIcon} name="check" size={18} />
    )
};

const styles = StyleSheet.create({
    outterContainer: {
        marginVertical: 5,
        flex: 1,
        width: '100%',
    },
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        borderRadius: 5,
        borderWidth: 6,
        borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        height: '100%',
        width: '100%',
    },
    beaconIcon: {
        paddingHorizontal: 10,
        width: 50,
        height: '60%',
        // resizeMode: 'contain',
    },
    beaconTitle: {
        marginRight: 10,
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    statusIcon: {
        position: 'absolute',
        right: 15,
        color: 'green',
        padding: 2,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.8)',
    }
});