import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';
import Icon from "../Icon";
import LangIcon from "../LangIcon";
import LangListSetting from "../LangListSetting";

const SetLanguageModal = props => {
    const {visible, activeLang, onClose, onChangeLang} = props;
    return (
        <Modal animationType="fade"
               transparent
               visible={visible}
               type="fullScreen"
        >
            <SafeAreaView style={styles.container}>
                <Header onCloseClick={onClose}/>
                <LangListSetting
                    activeLang={activeLang}
                    onChangeLang={onChangeLang}
                />
            </SafeAreaView>
        </Modal>

    )
};

export default SetLanguageModal;

const Header = props => {
    const {onCloseClick} = props
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onCloseClick}>
                <Icon name="close" style={styles.closeButton} size={30} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    headerContainer: {
        width: '100%',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    closeButton: {
        color: 'white',
        paddingHorizontal: 10
    },
    pageListContainer: {
        flex: 1,
        alignItems: 'center',
    },
    pageItemContainer: {
        padding: 10,
        flexDirection: 'row',
        width: 150,
        alignItems: 'center'
    },
    pageItemText: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 0.5,
        marginLeft: 10
    },
    pageItemActiveText: {
        color: 'rgb(205, 94, 90)'
    }

});