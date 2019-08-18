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
    const {title, description} = props
    return (
        <View style={styles.container}>
            <Title title={title} />
            <Description description={description}/>
            <AudioButton />
            <ShareButtons />
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
        <ScrollView style={styles.descriptionContainer}>
            <Text style={styles.description}>
                {description}
            </Text>

        </ScrollView>
    )
};

const AudioButton = props => {
    return (
        <TouchableOpacity style={styles.audioButtonContainer}>
            <Icon style={styles.audioIcon} name="volume-off" type="fonta" size={35}/>
        </TouchableOpacity>
    );
};

const ShareButtons = props => {
    return (
        <View style={styles.shareButtonsContainer}>
            <IconButton style={styles.twitterIcon} iconName="twitter" size={35}/>
            <IconButton style={styles.facebookIcon} iconName="facebook-square" size={35}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -15,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        position: 'relative',
    },
    titleContainer: {
        width: '100%',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
    title: {
        fontSize: 22,
        color: 'rgb(205, 94, 90)',
        fontWeight: '600'
    },
    descriptionContainer: {
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
    description: {
        fontSize: 15,
        color: 'dimgrey',
    },
    audioButtonContainer: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgb(205, 94, 90)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    audioIcon: {
        color: 'white'
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