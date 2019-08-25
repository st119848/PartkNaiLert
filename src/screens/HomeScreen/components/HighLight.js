import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

const HighLight = props => {
    return (
        <View style={styles.container}>
            <Header {...props} />
            <ItemsList {...props}/>
        </View>
    )
};

export default HighLight;

const Header = props => {
    const {onMoreItemClick} = props
    return (
        <View style={styles.headerContainer}>
            <Title/>
            <MoreButton onPress={onMoreItemClick} />
        </View>
    )
};

const Title = () => {
    return (
        <Text style={styles.title}>Museum Highlight</Text>
    )
};

const MoreButton = props => {
    const {onPress} = props;
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
            <Text style={styles.buttonLabel}>
                More
            </Text>
        </TouchableOpacity>
    )
};

const ItemsList = props => {
    const {imagesHighlight=[]} = props;
    return (
        <ScrollView horizontal style={styles.itemListContainer}>
            {imagesHighlight.map((item, index) => item.path && (
                <ItemImage source={item.path} key={index}/>
            ))}
        </ScrollView>
    )
};

const ItemImage = props => {
    const {source} = props
    return (
        <View style={styles.itemImageContainer}>
            <Image style={styles.itemImage} source={{uri: source}} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    headerContainer: {
        width: '100%',
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    title: {
        color: 'rgb(125, 105 , 87)',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    buttonContainer: {
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'rgb(125, 105 , 87)',
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonLabel: {
        color: 'rgb(125, 105 , 87)',
    },
    itemListContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingBottom: 15,
    },
    itemImageContainer: {
        width: 120,
        height: 90,
        marginRight: 10,
    },
    itemImage: {
        width: '100%',
        height: '100%',
    }
});