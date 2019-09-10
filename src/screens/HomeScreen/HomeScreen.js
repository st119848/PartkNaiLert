import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    Linking,
    Platform,
    Dimensions,
} from "react-native";
import Banner from "./components/Banner";
import HighLight from "./components/HighLight";
import Description from "./components/Description";
import BeaconsStatus from "./components/BeaconsStatus";
import ARButton from "./components/ARButton";
import SetLanguageScreen from "./screens/SetLanguageScreen";
import SetPageScreen from "./screens/SetPageScreen";
import {translate} from "../../helpers/translates";
import UnityView from 'react-native-unity-view';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        headerTitle: null
    };

    state = {
        isShowSetLang: false,
        isShowSetPage: false,
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
        const {isShowSetLang, isShowSetPage} = this.state;
        const barStyle = (isShowSetLang || isShowSetPage) ? 'light-content' : 'default';
        return (
            <View style={styles.container}>
                <UnityView
                    style={styles.unity}
                />
                {/*<StatusBar barStyle={barStyle} />*/}
                {/*<Banner*/}
                {/*    language={language}*/}
                {/*    t={this.t}*/}
                {/*    onSetPageClick={this.handleHamburgerClick}*/}
                {/*    onSetLangClick={this.handleLangButtonClick}*/}
                {/*    onIntroClick={this.handleIntroClick}*/}
                {/*    onFindClick={this.handleGuidesClick}*/}
                {/*/>*/}
                {/*<ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>*/}
                {/*    <HighLight*/}
                {/*        imagesHighlight={imagesHighlight}*/}
                {/*        t={this.t}*/}
                {/*        onMoreItemClick={this.handleMoreItemClick}*/}
                {/*    />*/}
                {/*    <Description t={this.t} />*/}
                {/*    <BeaconsStatus t={this.t} />*/}
                {/*</ScrollView>*/}
                {/*<ARButton t={this.t} />*/}
                {/*<SetPageScreen*/}
                {/*    visible={isShowSetPage}*/}
                {/*    onClose={this.handleCloseModal}*/}
                {/*    onChangePage={this.handleChangePage}*/}
                {/*/>*/}
                {/*<SetLanguageScreen*/}
                {/*    visible={isShowSetLang}*/}
                {/*    activeLang={language}*/}
                {/*    onClose={this.handleCloseModal}*/}
                {/*    onChangeLang={this.handleChangeLang}*/}
                {/*/>*/}
            </View>
        )
    }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        position: 'relative',
    },
    unity: {
        width,
        height
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