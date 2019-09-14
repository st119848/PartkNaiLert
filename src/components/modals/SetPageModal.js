import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Modal,
} from 'react-native';
import Icon from "../Icon";

const SetPageModal = props => {
    const {active, visible, onClose, onChangePage} = props;
    return (
        <Modal animationType="fade"
               transparent
               visible={visible}
               type="fullScreen"
        >
            <SafeAreaView style={styles.container}>
                <Header onCloseClick={onClose}/>
                <PageList active={active} onChangePage={onChangePage} />
            </SafeAreaView>
        </Modal>
    )
}

export default SetPageModal;

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

const PageList = props => {
    const {active, onChangePage} = props;
    const homePageList = [
        {
            label: 'Introduction',
            page: 'Intro'
        },
        {
            label: 'Park Nai Lert',
            page: 'PNL'
        },
        {
            label: 'Find Us',
            page: 'Find'
        },
        {
            label: 'Contact Us',
            page: 'Contact'
        },
    ];
    const pNLPageList = [
        {
            label: 'Home',
            page: 'Home'
        },
        {
            label: 'Introduction',
            page: 'Intro'
        },

        {
            label: 'Find Us',
            page: 'Find'
        },
        {
            label: 'Contact Us',
            page: 'Contact'
        },
    ];
    const pageList = active === 'PNL'? pNLPageList : homePageList;
    return (
        <View style={styles.pageListContainer}>
            {pageList.map((item, index) => {
                const {label, page} = item;
                const handlePageClick = () => page && onChangePage(page);
                return (
                    <TouchableOpacity style={styles.pageItemContainer} key={index} onPress={handlePageClick}>
                        <Text style={styles.pageItemText}>{label}</Text>
                    </TouchableOpacity>
                )
            })}
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
        padding: 10
    },
    pageItemText: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 0.5
    },

});