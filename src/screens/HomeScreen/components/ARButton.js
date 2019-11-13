import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ImageBackground, Image,
} from 'react-native';
import Icon from "../../../components/Icon";
import ARBG from '../../../assets/img/ar_icon_bg.png'
import arIcon from "../../../assets/img/ar_icon.png";

const ARButton = ({t, onPress}) => {
    const tryLabel = t('home.buttons.try');
    const cameraLabel = t('home.buttons.camera');
    return (
        <TouchableOpacity onPress={onPress} style={styles.outterContainer}>
            <ImageBackground source={ARBG} style={styles.container} imageStyle={styles.imageContainer}>
                <ARIcon/>
                <Title tryLabel={tryLabel} cameraLabel={cameraLabel}/>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const ARIcon = ({}) => {
    return (
        <Image source={arIcon} style={styles.arIcon}/>
    );
};

const Title = () => {
    return (
        <Text style={styles.buttonARLabel}>
            AR
        </Text>
    );
};

export default ARButton;

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
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 5,
        borderWidth: 6,
        borderColor: 'rgba(255, 255, 255, 0.8)'
    },
    imageContainer: {
        height: '100%'
    },
    right: {
        textAlign: 'right',
    },
    buttonARLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'PT Mono',
        fontWeight: '600',
        padding: 5,
    },
    arIcon: {
        paddingHorizontal: 10,
        height: 40,
        width: 65,
        marginRight: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});