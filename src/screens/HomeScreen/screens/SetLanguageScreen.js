import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';
import Icon from "../../../components/Icon";
import LangIcon from "../../../components/LangIcon";

const SetLanguageScreen = props => {
    const {visible, onClose} = props;
    return (
        <Modal animationType="fade"
               transparent
               visible={visible}
               type="fullScreen"
        >
            <SafeAreaView style={styles.container}>
                <Header onCloseClick={onClose}/>
                <PageList />
            </SafeAreaView>
        </Modal>

    )
};

export default SetLanguageScreen;

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

const PageList = () => {
    const pageList = [
        {
            lang: 'en',
            label: 'English'
        },
        {
            lang: 'cn',
            label: '中文'
        },
        {
            lang: 'jp',
            label: '日本'
        },
        {
            lang: 'th',
            label: 'ไทย'
        },
    ];
    return (
        <View style={styles.pageListContainer}>
            {pageList.map((item, index) => (
                <TouchableOpacity key={index}>
                    <View style={styles.pageItemContainer} >
                        <LangIcon lang={item.lang} />
                        <Text style={styles.pageItemText}>{item.label}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.9,
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

});