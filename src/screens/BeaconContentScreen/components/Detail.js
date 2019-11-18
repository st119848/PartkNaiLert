import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native'
import Icon from "../../../components/Icon";

const Detail = props => {
    const {isCanPlay, audioStatus, title, description, onPlaySound} = props
    return (
        <View style={styles.container}>
            <Title title={title} />
            <Description description={description}/>
            {isCanPlay && <AudioButton audioStatus={audioStatus} onPress={onPlaySound} />}
        </View>
    )
};

export default Detail;

const Title = props => {
    const {title} = props
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
};

const Description = props => {
    const {description} = props
    return (
        <ScrollView style={styles.descriptionContainer} contentContainerStyle={styles.descriptionContentContainer}>
            <Text style={styles.description}>
                {description}
            </Text>
        </ScrollView>
    )
};

const AudioButton = props => {
    const {onPress, audioStatus='pause'} = props;
    const audioIconMap = {
        pause: 'controller-play',
        playing: 'controller-paus',
        playend: 'cw'
    };
    const audioIcon = audioIconMap[audioStatus] || audioIconMap.pause;
    return (
        <TouchableOpacity style={styles.audioButtonContainer} onPress={onPress}>
            <Icon style={styles.audioIcon} name={audioIcon} type="entypo" size={25}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: -15,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 15,
        position: 'relative',
    },
    titleContainer: {
        width: '100%',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#6e4f06',
    },
    title: {
        fontSize: 22,
        color: '#4D3606',
        fontWeight: '400',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular'
    },
    descriptionContainer: {
        flex: 1,
    },
    description: {
        color: '#4D3606',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular',
    },
    descriptionContentContainer: {
        paddingVertical: 15
    },
    audioButtonContainer: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        width: 40,
        height: 40,
        paddingTop: 2,
        paddingLeft: 1,
        borderRadius: 20,
        backgroundColor: 'rgb(205, 94, 90)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    audioIcon: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareButtonsContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebookIcon: {
        color: 'rgb(74, 90, 143)'
    },
    twitterIcon: {
        color: 'rgb(73, 168, 238)'
    }
});