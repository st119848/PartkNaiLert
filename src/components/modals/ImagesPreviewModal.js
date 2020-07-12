import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer'
import {Modal, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "../Icon";

const ImagesPreviewModal = ({images=[], visible, onClose, initIndex=0}) => {
    return (
        <Modal animationType="slideUp"
               visible={visible}
               type="fullScreen">
            <ImageViewer index={initIndex} imageUrls={images} onSwipeDown={onClose} enableSwipeDown/>
            {visible && <Header onCloseClick={onClose}/>}
        </Modal>
    )
}

export default ImagesPreviewModal;

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