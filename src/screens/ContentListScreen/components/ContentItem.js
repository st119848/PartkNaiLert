import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

const ContentItem = props => {
    const {id, coverImage, onSeeMoreClick} = props;
    const handleSeeMoreClick = () => onSeeMoreClick(id);
    return (
        <TouchableWithoutFeedback onPress={handleSeeMoreClick}>
            <View style={styles.container}>
                <ImageBackground source={{uri: coverImage}} style={styles.imageContainer}>
                    <Detail {...props}/>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ContentItem;

const Detail = props => {
    const {title} = props;
    return (
        <View style={styles.detailContainer}>
            <Title title={title} />
        </View>
    );
};

const Title = props => {
    const {title} = props;
    return (
        <Text style={styles.title}>{title}</Text>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        marginTop: 15,
        paddingHorizontal: '5%',
        alignItems: 'center'

    },
    imageContainer: {
        maxWidth: 500,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        position: 'relative',

    },
    detailContainer: {
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        marginBottom: 10,
        marginHorizontal: -10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        // backgroundColor: 'red'
    },
});