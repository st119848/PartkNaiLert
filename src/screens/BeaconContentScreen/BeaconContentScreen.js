import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native'
import ImagesSlider from "./components/ImagesSlider";
import Detail from "./components/Detail";
import Sound from 'react-native-sound';
import Share from 'react-native-share';

class BeaconContentScreen extends Component {
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

    handleFacebookShare = () => {
        const {beaconContent={}} = this.props;
        const {coverImage} = beaconContent;
        const shareOptions = {
            title: 'Share file',
            url: 'http://nailert-api.topwork.asia/public/images/b02031c3.jpg',
            message: 'test',
            social: Share.Social.FACEBOOK,
            failOnCancel: false,
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    };

    handleTwitterShare = () => {
        const shareOptions = {
            title: 'Share file',
            url: 'http://nailert-api.topwork.asia/public/images/b02031c3.jpg',
            social: Share.Social.TWITTER,
            failOnCancel: false,
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    };

    componentDidMount(){
        const {beaconContent={}} = this.props;
        const {sound} = beaconContent;
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
        const {beaconContent={}} = this.props;
        const {galleryImages=[]} = beaconContent;
        console.log('beaconContent', beaconContent)
        return (
            <View style={styles.container}>
                <ImagesSlider images={galleryImages}/>
                <Detail
                    {...beaconContent}
                    isCanPlay={isCanPlay}
                    audioStatus={audioStatus}
                    onFacebookShare={this.handleFacebookShare}
                    onTwitterShare={this.handleTwitterShare}
                    onPlaySound={this.handleTogglePlayAudio}
                />
            </View>
        )
    }
}

export default BeaconContentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});