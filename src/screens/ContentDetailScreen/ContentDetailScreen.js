import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ImageBackground
} from 'react-native'
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import ImagesSlider from "./components/ImagesSlider";
import Detail from "./components/Detail";
import Sound from 'react-native-sound';
import Share from 'react-native-share';
import {dynamicEventLink} from './../../helpers/firebase'
import LangSettingButton from "../../components/header/LangSettingButton";
import BG from "../../assets/img/bg_main.png";

class ContentDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <LangSettingButton />,
            headerBackTitle: null,
            headerTintColor: 'white',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: 'rgba(70, 41, 0, 0.8)',
            },
            headerTitle: 'Highlight'
        };
    };

    state={
        audioStatus: 'pause',
        isCanPlay: false,
        isPlayingAudio: false,
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

    handleFacebookShare = async () => {
        const {activeHighlightItem={}} = this.props;
        const {id, title, coverImage, description} = activeHighlightItem;
        const shareLink = await dynamicEventLink(id, title, coverImage, description);
        const shareOptions = {
            title: title,
            url: shareLink,
            message: title,
            social: Share.Social.FACEBOOK,
            failOnCancel: false,
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    };

    handleTwitterShare = async () => {
        const {activeHighlightItem={}} = this.props;
        const {id, title, coverImage, description} = activeHighlightItem;
        const shareLink = await dynamicEventLink(id, title, coverImage, description);
        const shareOptions = {
            title: title,
            url: shareLink,
            message: title,
            social: Share.Social.TWITTER,
            failOnCancel: false,
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
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

    render() {
        const {audioStatus, isCanPlay} = this.state;
        const {activeHighlightItem={}} = this.props;
        const {galleryImages=[]} = activeHighlightItem;
        return (
            <ImageBackground source={BG} style={styles.outtercontainer}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.innerContainer}>
                        <ImagesSlider images={galleryImages}/>
                        <Detail
                            {...activeHighlightItem}
                            isCanPlay={isCanPlay}
                            audioStatus={audioStatus}
                            onFacebookShare={this.handleFacebookShare}
                            onTwitterShare={this.handleTwitterShare}
                            onPlaySound={this.handleTogglePlayAudio}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
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
        marginTop: 44,
        padding: 15,
    }
});