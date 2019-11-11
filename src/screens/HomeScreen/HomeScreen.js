import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    Linking,
    SafeAreaView,
    Platform,
    Dimensions,
    ImageBackground
} from "react-native";
import HighLight from "./components/HighLight";
import Description from "./components/Description";
import BeaconsStatus from "./components/BeaconsStatus";
import ARButton from "./components/ARButton";
import {translate} from "../../helpers/translates";
import firebase from 'react-native-firebase'
import {getParamsFromUrl} from '../../helpers/url'
import LangSettingButton from "../../components/header/LangSettingButton";
import PageSettingButton from "../../components/header/PageSettingButton";
import BG from "../../assets/img/bg_main.png";
import logoName from "../../assets/img/logoName.png";

export default class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <PageSettingButton navigation={navigation}/>,
            headerRight: <LangSettingButton />,
            headerBackTitle: null,
            headerTintColor: 'rgb(125, 105 , 87)',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: 'rgba(70, 41, 0, 0.8)',
            },
        };
    };

    state = {
        isShowArScreen: false
    };

    handleARButtonClick = () => {
        const {showARModal} = this.props;
        showARModal();
    };

    handleMoreItemClick = () => {
        const {navigation} = this.props;
        navigation.navigate('List');
    };

    handleIntroClick = () => {
        const {navigation} = this.props;
        navigation.navigate('Intro');
    };

    handleGuidesClick = () => {
        const {navigation} = this.props;
        navigation.navigate('Find');
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    componentDidMount() {
        const {getImageSlidersFromApi} = this.props;
        getImageSlidersFromApi();

        firebase.links()
            .getInitialLink()
            .then((url) => {
                if (url) {
                    console.log('url');
                    // app opened from a url
                    this.goToDetailPage(url);
                } else {
                    console.log('test1');
                    if (Platform.OS === 'android') {
                        Linking.getInitialURL().then(url => {
                            console.log('url', url)
                            this.goToDetailPage(url);
                        });
                    } else {
                        Linking.addEventListener('url', this.handleOpenURL);
                    }
                }
            });
    }

    componentWillUnmount() { // C
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = async (event) => {
        this.goToDetailPage(event.url);
    };

    goToDetailPage = async (url) => {
        const resUrl = await fetch(url).then(res => res.url);
        const params = getParamsFromUrl(resUrl);
        const {id} = params;
        const {navigation, setActiveHighlightItem, getHighlightListFromApi} = this.props;
        await getHighlightListFromApi();
        const itemId = parseInt(id);
        await setActiveHighlightItem(itemId);
        navigation.navigate('Detail');
    };

    render() {
        const {imagesHighlight, isGettingImageSlider, isInBeaconArea} = this.props;
        const {isShowArScreen} = this.state;
        return (
            <ImageBackground source={BG} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.innerContainer}>
                    <LogoBar />
                    <View style={styles.contentContainer}>
                        <View style={styles.contentInnerContainer}>
                            <HighLight
                                loading={isGettingImageSlider}
                                imagesHighlight={imagesHighlight}
                                t={this.t}
                                onMoreItemClick={this.handleMoreItemClick}
                            />
                            <BeaconsStatus t={this.t} isInBeaconZone={isInBeaconArea}/>
                            <ARButton t={this.t} onPress={this.handleARButtonClick} />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const LogoBar = props => {
    return (
        <View style={styles.logoBarContainer}>
            <Image style={styles.logoBar} source={logoName} />
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    innerContainer: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentContainer: {
        width: '100%',
        padding: 15,
        height: '55%'
    },
    contentInnerContainer: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
    },
    logoBarContainer: {
        marginTop: 44,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: 50,
    },
    logoBar: {
        width: '100%',
        resizeMode: 'contain',
    }
});