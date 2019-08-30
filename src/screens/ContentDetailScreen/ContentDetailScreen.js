import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView
} from 'react-native'
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import ImagesSlider from "./components/ImagesSlider";
import Detail from "./components/Detail";
import Sound from 'react-native-sound';

class ContentDetailScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)',
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
            <SafeAreaView style={styles.container}>
                <ImagesSlider images={galleryImages}/>
                <Detail
                    {...activeHighlightItem}
                    isCanPlay={isCanPlay}
                    audioStatus={audioStatus}
                    onPlaySound={this.handleTogglePlayAudio}
                />
            </SafeAreaView>
        )
    }
}

export default ContentDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});