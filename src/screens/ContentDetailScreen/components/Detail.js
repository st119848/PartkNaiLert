import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import IconButton from "../../../components/IconButton";
import Icon from "../../../components/Icon";

const Detail = props => {
    const {title, description, isCanPlay} = props
    return (
        <View style={styles.container}>
            <Title title={title} />
            <Description description={description}/>
            {isCanPlay && <BottomTools {...props}/>}
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
    const audioLabels = {
        pause: 'Play',
        playing: 'Pause',
        playend: 'Play'
    };
    const audioLabel = audioLabels[audioStatus] || audioLabels.pause;
    return (
        <TouchableOpacity style={styles.audioButtonContainer} onPress={onPress}>
            <Text style={styles.playLabel}>{audioLabel}</Text>
        </TouchableOpacity>
    );
};

const BottomTools = props => {
    const {audioStatus, onPlaySound} = props
    return (
        <View style={styles.bottomToolsContainer}>
            <Text style={styles.playTitle}>Sound Available</Text>
            <AudioButton audioStatus={audioStatus} onPress={onPlaySound} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        alignItems: 'center',
        position: 'relative',
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        paddingBottom: 0,
    },
    titleContainer: {
        width: '100%',
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#6e4f06',
    },
    title: {
        fontSize: 22,
        color: '#4D3606',
        fontWeight: '400',
        fontFamily: 'PT Mono',
    },
    descriptionContainer: {
        flex: 1,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        width: '100%',
        borderColor: '#6e4f06',
    },
    description: {
        color: '#4D3606',
        fontFamily: 'PT Mono',
    },
    descriptionContentContainer: {
        paddingVertical: 15
    },
    audioButtonContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#4D3606',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    playLabel: {
        color: 'white',
        fontFamily: 'PT Mono',
        fontSize: 16,
        fontWeight: '500',
    },
    playTitle: {
        color: '#4D3606',
        marginRight: 10,
        fontFamily: 'PT Mono',
        fontSize: 16,
    },
    bottomToolsContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    facebookIcon: {
        color: 'rgb(74, 90, 143)'
    },
    twitterIcon: {
        color: 'rgb(73, 168, 238)'
    }
});