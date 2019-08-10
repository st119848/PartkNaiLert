import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import Swiper from 'react-native-swiper'

export default class extends PureComponent {
    render() {
        console.log("slideImg", this.props.images)
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    autoplay
                    loop
                    autoplayTimeout={13}
                    // horizontal={false} 
                    height={height}
                    width={width - 20}
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activeDot} />}
                    paginationStyle={{
                        bottom: -23
                    }}
                >
                    {this.props.images.map((image, key) => (
                        <View style={styles.slide} key={key}>
                            <Image resizeMode='stretch' style={styles.image} source={{ uri: image.image }} />
                        </View>
                    ))}

                </Swiper>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 200,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },

    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width,
        flex: 1,
        backgroundColor: '#7D4900'
    },
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#7D4900',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }

});
