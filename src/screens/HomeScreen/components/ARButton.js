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
        <TouchableOpacity onPress={onPress}>
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
    container: {
        marginTop: 10,
        height: 70,
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