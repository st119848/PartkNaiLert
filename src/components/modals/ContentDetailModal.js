import React from 'react';
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from "react-native";
import Icon from "../Icon";
import BeaconContentScreen from "../../screens/BeaconContentScreen";

const ContentDetailModal = props => {
    const {visible, onClose} = props;
    return (
        <Modal animationType="slideUp"
               visible={visible}
               type="fullScreen">

            <View style={styles.container}>
                <BeaconContentScreen />
            </View>
            <Header onCloseClick={onClose}/>
        </Modal>
    )
};

export default ContentDetailModal;

const Header = props => {
    const {onCloseClick} = props
    return (
        <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity onPress={onCloseClick}>
                <Icon name="close" style={styles.closeButton} size={30} />
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    },
    closeButton: {
        color: 'white',
        paddingHorizontal: 10
    },
});