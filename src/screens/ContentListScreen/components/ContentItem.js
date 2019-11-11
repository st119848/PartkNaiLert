import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import Icon from "../../../components/Icon";

const ContentItem = props => {
    const {id, coverImage, onSeeMoreClick} = props;
    const handleSeeMoreClick = () => onSeeMoreClick(id);
    return (
        <TouchableWithoutFeedback onPress={handleSeeMoreClick}>
            <View style={styles.container}>
                <Image source={{uri: coverImage}} style={styles.imageContainer}/>
                <Detail {...props} onPress={handleSeeMoreClick}/>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ContentItem;

const Detail = props => {
    const {title, description, onPress} = props;
    return (
        <View style={styles.detailContainer}>
            <Title title={title} />
            <View style={styles.descriptionContainer}>
                <Description description={description} />
                <MoreButton onPress={onPress}/>
            </View>
        </View>
    );
};

const Title = props => {
    const {title} = props;
    return (
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>{title}</Text>
    )
};

const Description = props => {
    const {description} = props;
    return (
        <Text style={styles.description} ellipsizeMode="tail" numberOfLines={3}>{description}</Text>
    )
};

const MoreButton = props => {
    const {onPress} = props;
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
            <Icon name="right" style={styles.buttonIcon}/>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 315,
        marginTop: 15,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    imageContainer: {
        maxWidth: 500,
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        backgroundColor: '#4D3606',
        borderRadius: 4,
    },
    detailContainer: {
        width: '100%',
        marginTop: 2,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    title: {
        textAlign: 'center',
        color: '#4D3606',
        fontSize: 22,
        fontWeight: '400',
        // backgroundColor: 'red'
    },
    description: {
        color: '#4D3606',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '100%',
        height: '100%',
        marginRight: 5
    },
    buttonContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#645227',
        flexDirection: 'row',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    buttonIcon: {
        color: '#FFF5C9',
        fontSize: 18,
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 55,
        marginTop: 5,
    }
});