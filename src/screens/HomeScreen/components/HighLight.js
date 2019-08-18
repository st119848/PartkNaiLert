import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

const HighLight = props => {
    return (
        <View style={styles.container}>
            <Header {...props} />
            <ItemsList/>
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

const ItemsList = () => {
    const mockItemImages = [
        'http://128.199.204.164:8000/public/images/149a61a1-757a-487b-864e-473cbf9cc29e.jpg',
        'http://128.199.204.164:8000/public/images/0332f9f6.jpg',
        'http://128.199.204.164:8000/public/images/63c3b437.jpg'
    ];
    return (
        <View style={styles.itemListContainer}>
            {mockItemImages.map((item, index) => (
                <ItemImage source={item} key={index}/>
            ))}
        </View>
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
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemImageContainer: {
        width: '32%',
    },
    itemImage: {
        width: 90,
        height: 90,
    }
});