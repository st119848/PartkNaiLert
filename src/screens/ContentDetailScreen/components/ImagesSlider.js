import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';

class ImagesSlider extends Component {
    render() {
        const {images, onImagePress} = this.props;
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    containerStyle={styles.itemContainer}
                    autoplay
                    loop
                    autoplayTimeout={5}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activeDot} />}
                >
                    {images.map((image, key) => (
                        <TouchableWithoutFeedback onPress={() => onImagePress(key)} key={key}>
                            <View style={styles.slide}>
                                <Image  style={styles.image} source={{ uri: image }} />
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </Swiper>
            </View>
        )
    }
}

export default ImagesSlider;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
    },
    wrapper: {
        backgroundColor: '#4D3606',
    },
    itemContainer: {
        overflow: 'hidden',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        flex: 1,
        backgroundColor: '#4D3606',
    },
    dot: {
        backgroundColor: 'white',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#4D3606',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }

});