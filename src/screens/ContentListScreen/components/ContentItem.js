import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';

const ContentItem = props => {
    const {imageUrl} = props;
    return (
        <View style={styles.container}>
            <ImageBackground source={{url: imageUrl}} style={styles.imageContainer}>
                <Detail {...props}/>
            </ImageBackground>
        </View>
    );
};

export default ContentItem;

const Detail = props => {
    const {title, onSeeMoreClick} = props;
    return (
        <View style={styles.detailContainer}>
            <Title title={title} />
            <ShowMoreButton onPress={onSeeMoreClick} />
        </View>
    );
};

const Title = props => {
    const {title} = props;
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

const ShowMoreButton = props => {
    const {onPress} = props
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.showMoreButton}>Show more</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 280,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        position: 'relative'
    },
    detailContainer: {
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 10,
        marginHorizontal: -10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 20
    },
    showMoreButton: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginRight: 20
    }
});