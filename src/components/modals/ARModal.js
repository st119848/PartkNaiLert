import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    Modal, StatusBar
} from 'react-native';
import ARScreen from '../../screens/ARScreen'
import Icon from "../Icon";

const ARModal = props => {
    const {scene, visible, onClose} = props;
    return (
        <Modal animationType="slideUp"
               visible={visible}
               type="fullScreen">
            <View style={styles.container}>
                {visible && <ARScreen scene={scene} />}
            </View>
            <Header onCloseClick={onClose}/>
        </Modal>
    )
};

export default ARModal;

const Header = props => {
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