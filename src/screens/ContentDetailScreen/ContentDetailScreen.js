import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ImageBackground,
    Platform
} from 'react-native'
import HeaderTitle from "../../components/header/HeaderTitle";
import ImagesSlider from "./components/ImagesSlider";
import Detail from "./components/Detail";
import Sound from 'react-native-sound';
import Share from 'react-native-share';
import {dynamicEventLink} from './../../helpers/firebase'
import LangSettingButton from "../../components/header/LangSettingButton";
import BG from "../../assets/img/bg_main.png";
import ContentDetailLoading from './components/loading/ContentDetailLoading'
import {translate} from "../../helpers/translates";
import ImagesPreviewModal from "../../components/modals/ImagesPreviewModal";
import IconButton from "../../components/IconButton";

class ContentDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const {state={}} = navigation;
        const title = navigation.getParam('title');
        return {
            headerRight: <LangSettingButton routeName={state.routeName} />,
            headerBackTitle: null,
            headerTintColor: 'white',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: 'rgba(70, 41, 0, 0.8)',
            },
            headerTitle: <HeaderTitle title={title} />,
        };
    };

    state={
        audioStatus: 'pause',
        isCanPlay: false,
        isPlayingAudio: false,
        isShowPreview: false,
        previewIndex: 0,
    };

    handleTogglePlayAudio = () => {
        const {isPlayingAudio, isCanPlay} = this.state;
        if(isCanPlay && this.player) {
            if(isPlayingAudio) {
                this.setState({
                    isPlayingAudio: false,
                    audioStatus: 'pause'
                });
                this.player.pause();
            } else {
                this.setState({audioStatus: 'playing'});
                this.player.play((success) => {
                    this.setState({audioStatus: 'playend'});
                });
                this.setState({isPlayingAudio: true});
            }
        }
    };

    handleShare = async () => {
        const {activeHighlightItem={}} = this.props;
        const {id, title, coverImage, description} = activeHighlightItem;
        const shareLink = await dynamicEventLink(id, title, coverImage, description);

        const shareOptions = {
            title: title,
            url: shareLink,
            message: shareLink,
            failOnCancel: false,
        };
        Share.open(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    componentDidMount(){
        const {activeHighlightItem={}} = this.props;
        const {sound} = activeHighlightItem;
        if(sound) {
            this.player = new Sound(sound, '', (error) => {
                if (error) {
                    this.setState({isCanPlay: false});
                } else {
                    this.setState({isCanPlay: true});
                }
            });
        }
    }

    componentWillUnmount() {
        this.player && this.player.stop();
    }

    handlePreviewOpen = (index=0) => {
        this.setState({
            isShowPreview: true,
            previewIndex: index
        })
    };

    handlePreviewClose = () => {
        this.setState({isShowPreview: false})
    };

    render() {
        const {audioStatus, isCanPlay, isShowPreview, previewIndex} = this.state;
        const {activeHighlightItem={}, isGettingHighlightList} = this.props;
        const {galleryImages=[]} = activeHighlightItem;
        const imagesPreview = galleryImages.map((image) => {
            return {
                url: image
            }
        })
        return (
            <ImageBackground source={BG} style={styles.outtercontainer}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.innerContainer}>
                        {isGettingHighlightList && <ContentDetailLoading />}
                        {!isGettingHighlightList && <Content
                            t={this.t}
                            item={activeHighlightItem}
                            images={galleryImages}
                            isCanPlay={isCanPlay}
                            audioStatus={audioStatus}
                            onShare={this.handleShare}
                            onPlaySound={this.handleTogglePlayAudio}
                            onImagePress={this.handlePreviewOpen}
                        />}
                    </View>
                </SafeAreaView>
                {(imagesPreview.length > 0) && <ImagesPreviewModal visible={isShowPreview} initIndex={previewIndex} images={imagesPreview} onClose={this.handlePreviewClose} />}
            </ImageBackground>
        )
    }
}

const Content = props => {
    const {images, item, isCanPlay, audioStatus, onShare, onPlaySound, t, onImagePress, } = props;
    return (
        <>
            <ShareButton onShare={onShare} />
            <ImagesSlider images={images} onImagePress={onImagePress}/>
            <Detail
                {...item}
                t={t}
                isCanPlay={isCanPlay}
                audioStatus={audioStatus}
                onShare={onShare}
                onPlaySound={onPlaySound}
            />
        </>
    )
};

const ShareButton = props => {
    const {onShare} = props;
    return (
        <View style={styles.shareIconContainer}>
            <IconButton style={styles.shareIcon} iconName="sharealt" size={35} onPress={onShare}/>
        </View>
    )
}

export default ContentDetailScreen;

const styles = StyleSheet.create({
    outtercontainer: {
        flex: 1,
    },
    container: {
        flex: 1,

    },
    innerContainer: {
        flex: 1,
        marginTop: Platform.OS === 'ios'? 44 : 54,
        padding: 15,
    },
    shareIconContainer: {
        position: 'relative'
    },
    shareIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
});