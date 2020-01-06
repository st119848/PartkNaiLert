import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    Linking,
    // SafeAreaView,
    Platform,
    ImageBackground
} from "react-native";
import HighLight from "./components/HighLight";
import BeaconsStatus from "./components/BeaconsStatus";
import ARButton from "./components/ARButton";
import {translate} from "../../helpers/translates";
import firebase from 'react-native-firebase'
import {getParamsFromUrl} from '../../helpers/url'
import LangSettingButton from "../../components/header/LangSettingButton";
import PageSettingButton from "../../components/header/PageSettingButton";
import BG from "../../assets/img/bg_main.png";
import logoName from "../../assets/img/logoName.png";
import {SafeAreaView} from 'react-navigation'

export default class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const {state={}} = navigation;
        return {
            headerLeft: <PageSettingButton navigation={navigation}/>,
            headerRight: <LangSettingButton routeName={state.routeName} />,
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
                    // app opened from a url
                    this.goToDetailPage(url);
                } else {
                    if (Platform.OS === 'android') {
                        Linking.getInitialURL().then(url => {
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
                            <ButtonsGroup t={this.t} isInBeaconArea={isInBeaconArea} onArPress={this.handleARButtonClick} />
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

const ButtonsGroup = props => {
    const {isInBeaconArea, onArPress, t} = props;
    return (
        <View style={styles.buttonGroupContainer}>
            <BeaconsStatus t={t} isInBeaconZone={isInBeaconArea}/>
            <ARButton t={t} onPress={onArPress} />
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
        height: '55%',
        maxWidth: 500,
    },
    contentInnerContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
    },
    logoBarContainer: {
        marginTop: Platform.OS === 'ios'? 44 : 54,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingVertical: 10,
        flexDirection: 'row',
    },
    logoBar: {
        height: '100%',
        resizeMode: 'contain',
    },
    buttonGroupContainer: {
        flex: 1,
    }
});