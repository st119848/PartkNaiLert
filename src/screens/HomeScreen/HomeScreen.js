import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    Linking,
    Platform
} from "react-native";
import Banner from "./components/Banner";
import HighLight from "./components/HighLight";
import Description from "./components/Description";
import BeaconsStatus from "./components/BeaconsStatus";
import ARButton from "./components/ARButton";
import SetLanguageModal from "../../components/modals/SetLanguageModal";
import SetPageModal from "../../components/modals/SetPageModal";
import {translate} from "../../helpers/translates";
import ARModal from "../../components/modals/ARModal";

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        headerTitle: null
    };

    state = {
        isShowSetLang: false,
        isShowSetPage: false,
        isShowArScreen: false
    };

    handleHamburgerClick = () => {
        this.setState({
            isShowSetPage: true,
        })
    };

    handleLangButtonClick = () => {
        this.setState({
            isShowSetLang: true,
        })

    };

    handleARButtonClick = () => {
        this.setState({
            isShowArScreen: true,
        })
    };

    handleMoreItemClick = () => {
        const {navigation} = this.props;
        navigation.navigate('List');
    };

    handleChangePage = (page) => {
        this.handleCloseModal();
        const {navigation} = this.props;
        navigation.navigate(page);
    };

    handleChangeLang = (lang) => {
        const {settingLanguage} = this.props;
        settingLanguage(lang);
        this.handleCloseModal();
    };

    handleIntroClick = () => {
        const {navigation} = this.props;
        navigation.navigate('Intro');
    };

    handleGuidesClick = () => {
        const {navigation} = this.props;
        navigation.navigate('Find');
    };

    handleCloseModal = () => {
        this.setState({
            isShowSetPage: false,
            isShowSetLang: false,
            isShowArScreen: false,
        })
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    componentDidMount() {
        const {getImageSlidersFromApi, getBeaconContentFromApi} = this.props;
        getImageSlidersFromApi();
        getBeaconContentFromApi();

        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }

    componentWillUnmount() { // C
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = (event) => { // D
        console.log('event', event)
    };

    render() {
        const {language, imagesHighlight} = this.props;
        const {isShowSetLang, isShowSetPage, isShowArScreen} = this.state;
        const barStyle = (isShowSetLang || isShowSetPage || isShowArScreen) ? 'light-content' : 'default';
        return (
            <View style={styles.container}>
                <StatusBar barStyle={barStyle} />
                <Banner
                    language={language}
                    t={this.t}
                    onSetPageClick={this.handleHamburgerClick}
                    onSetLangClick={this.handleLangButtonClick}
                    onIntroClick={this.handleIntroClick}
                    onFindClick={this.handleGuidesClick}
                />
                <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
                    <HighLight
                        imagesHighlight={imagesHighlight}
                        t={this.t}
                        onMoreItemClick={this.handleMoreItemClick}
                    />
                    <Description t={this.t} />
                    <BeaconsStatus t={this.t} />
                </ScrollView>
                <ARButton t={this.t} onPress={this.handleARButtonClick} />
                <SetPageModal
                    visible={isShowSetPage}
                    onClose={this.handleCloseModal}
                    onChangePage={this.handleChangePage}
                />
                <SetLanguageModal
                    visible={isShowSetLang}
                    activeLang={language}
                    onClose={this.handleCloseModal}
                    onChangeLang={this.handleChangeLang}
                />
                <ARModal
                    scene='ARCarDemo'
                    visible={isShowArScreen}
                    onClose={this.handleCloseModal}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        position: 'relative',
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        paddingBottom: 20,
    },
    contentContainer: {
        alignItems: 'center'
    }
});