import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Linking,
    Platform,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import {translate} from "../../helpers/translates";
import BG from "../../assets/img/bg_main.png";
import ImagesPreviewModal from "../../components/modals/ImagesPreviewModal";
import Swiper from "react-native-swiper";
import map1 from '../../assets/img/map-1.png'
import map2 from '../../assets/img/map-2.png'

const { width } = Dimensions.get('window')

class FindUsScreen extends Component {

    state = {
        isShowPreview: false
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    handleClickMap = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${13.745513},${100.54606}`;
        const label = 'Nai Lert Park';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    };

    handlePreviewOpen = () => {
        this.setState({isShowPreview: true})
    };

    handlePreviewClose = () => {
        this.setState({isShowPreview: false})
    };

    componentDidMount() {
        const {getAboutUsFindFromApi} = this.props;
        getAboutUsFindFromApi();
    }

    render() {
        const {isShowPreview} = this.state;
        const mapUrls = [map1, map2];
        const imagesPreview = mapUrls.map((image) => {
            return {
                url: '',
                props: {
                    source: image
                }
            }
        })
        return (
            <ImageBackground source={BG} style={styles.outtercontainer}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Map mapUrls={mapUrls} onPress={this.handlePreviewOpen} />
                    </View>
                    <GoButton onPress={this.handleClickMap} t={this.t} />
                </SafeAreaView>
                {mapUrls && <ImagesPreviewModal visible={isShowPreview} images={imagesPreview} onClose={this.handlePreviewClose} />}
            </ImageBackground>
        )
    }
}

export default FindUsScreen;

const Map = props => {
    const {mapUrls, onPress} = props;
    return (
        <Swiper
            style={styles.wrapper}
            containerStyle={styles.itemContainer}
            autoplay
            loop
            autoplayTimeout={5}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
        >
            {mapUrls.map((image, key) => (
                <TouchableWithoutFeedback key={key} onPress={onPress}>
                    <View style={styles.mapContainer}>
                        <Image style={styles.map} source={image} />
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </Swiper>

    )
};

const GoButton = props => {
    const {t, onPress} = props;
    const goLabel = t('map.labels.go');
    return (
        <TouchableOpacity onPress={onPress} style={styles.goButtonContainer}>
            <Text style={styles.goButton}>{goLabel}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    outtercontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        marginTop: Platform.OS === 'ios'? 59 : 69,
        marginHorizontal: 15,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        position: 'relative',
        height: '50%'
    },
    titleContainer: {
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'rgb(125, 105 , 87)',
        top: 10,
        left: 0,
        right: 0,
        paddingLeft: 25,
        position: 'absolute',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,

    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapContainer: {
        width: '100%',
        height: '100%',
        padding: 10,
    },
    addressContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    address: {
        color: 'dimgrey',
    },
    goButtonContainer: {
        height: 45,
        marginHorizontal: 15,
        alignSelf: 'stretch',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#655327',
        marginVertical: 15,
    },
    goButton: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular',
    },
    itemContainer: {
        overflow: 'hidden',
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