import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView
} from "react-native";
import Banner from "./components/Banner";
import HighLight from "./components/HighLight";
import Description from "./components/Description";
import BeaconsStatus from "./components/BeaconsStatus";
import ARButton from "./components/ARButton";
import SetLanguageScreen from "./screens/SetLanguageScreen";
import SetPageScreen from "./screens/SetPageScreen";
import {translate} from "../../helpers/translates";

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
            isShowSetLang: true,
        })
    };

    handleLangButtonClick = () => {
        this.setState({
            isShowSetPage: true,
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
        const {getImageSlidersFromApi} = this.props;
        getImageSlidersFromApi();
    }

    render() {
        const {language, imagesHighlight} = this.props;
        const {isShowSetLang, isShowSetPage} = this.state;
        const barStyle = (isShowSetLang || isShowSetPage) ? 'light-content' : 'default';
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
                <ScrollView style={styles.contentContainer}>
                    <HighLight
                        imagesHighlight={imagesHighlight}
                        t={this.t}
                        onMoreItemClick={this.handleMoreItemClick}
                    />
                    <Description t={this.t} />
                    <BeaconsStatus t={this.t} />
                </ScrollView>
                <ARButton t={this.t} />
                <SetPageScreen
                    visible={isShowSetLang}
                    onClose={this.handleCloseModal}
                    onChangePage={this.handleChangePage}
                />
                <SetLanguageScreen
                    visible={isShowSetPage}
                    activeLang={language}
                    onClose={this.handleCloseModal}
                    onChangeLang={this.handleChangeLang}
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
    contentContainer: {
        width: '100%',
        height: '60%',
        paddingBottom: 20,
        // backgroundColor: 'red'
    }
});