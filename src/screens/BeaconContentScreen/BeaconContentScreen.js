import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet, TouchableOpacity,
    View
} from 'react-native'
import ImagesSlider from "./components/ImagesSlider";
import Detail from "./components/Detail";
import Sound from 'react-native-sound';
import Icon from "../../components/Icon";

class BeaconContentScreen extends Component {
    state={
        audioStatus: 'pause',
        isCanPlay: false,
        isPlayingAudio: false,
    };

    handleClose = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

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
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <ImagesSlider images={galleryImages}/>
                    <Detail
                        {...beaconContent}
                        isCanPlay={isCanPlay}
                        audioStatus={audioStatus}
                        onPlaySound={this.handleTogglePlayAudio}
                    />
                </View>
                <Header onCloseClick={this.handleClose}/>
            </View>
        )
    }
}

export default BeaconContentScreen;

const Header = props => {
    const {onCloseClick} = props
    return (
        <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity onPress={onCloseClick}>
                <Icon name="close" style={styles.closeButton} size={35} />
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.9,
        position: 'relative',
    },

    headerContainer: {
        width: 49,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    closeButton: {
        color: 'white',
        paddingHorizontal: 10,
    },
});