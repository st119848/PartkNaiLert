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
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {getParamsFromUrl} from '../../helpers/url'
import BG from "../../assets/img/bg_main.png";
import logoName from "../../assets/img/logoName.png";
import {SafeAreaView} from 'react-native-safe-area-context'
import ImagesPreviewModal from "../../components/modals/ImagesPreviewModal";
import BeaconScan from "../../../tools/BeaconScan";

export default class HomeScreen extends Component {

    state = {
        isShowPreview: false,
        previewIndex: 0,
    };

    handleARButtonClick = () => {
        const {navigation} = this.props;
        navigation.navigate('AR');
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

        dynamicLinks()
            .getInitialLink()
            .then(link => {
                if (link.url) {
                    // app opened from a url
                    this.goToDetailPage(link.url);
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

    handlePreviewOpen = (index=0) => {
        this.setState({
            isShowPreview: true,
            previewIndex: index
        })
    };

    handlePreviewClose = () => {
        this.setState({isShowPreview: false})
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
        const {imagesHighlight=[], isGettingImageSliderSuccess, isInBeaconArea, navigation} = this.props;
        const {isShowPreview, previewIndex} = this.state;
        const imagesPreview = imagesHighlight.map((image) => {
            return {
                url: image.path
            }
        })
        return (
            <ImageBackground source={BG} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.innerContainer}>
                    <LogoBar />
                    <View style={styles.contentContainer}>
                        <View style={styles.contentInnerContainer}>
                            <HighLight
                                loading={!isGettingImageSliderSuccess}
                                imagesHighlight={imagesHighlight}
                                t={this.t}
                                onMoreItemClick={this.handleMoreItemClick}
                                onImagePress={this.handlePreviewOpen}
                            />
                            <ImagesPreviewModal initIndex={previewIndex} visible={isShowPreview} images={imagesPreview} onClose={this.handlePreviewClose} />
                            <ButtonsGroup t={this.t} isInBeaconArea={isInBeaconArea} onArPress={this.handleARButtonClick} />
                        </View>
                    </View>
                </SafeAreaView>
                <BeaconScan navigation={navigation}/>
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