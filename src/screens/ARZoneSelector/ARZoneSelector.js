"use strict";

import React, {Component} from "react";
import {
    Theme,
    TitleText,
    ThreeDText,
    ThreeDBox,
    Container,
    Touch
} from "./style";
import {
    Dimensions,
    Image, Platform,
    ScrollView, StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';
import Swiper from "react-native-swiper";
import ImagesPreviewModal from "../../components/modals/ImagesPreviewModal";
import map1 from "../../assets/img/map-1.png";
import map2 from "../../assets/img/map-2.png";
import {translate} from "../../helpers/translates";

const { width } = Dimensions.get('window')

export default class ZoneSelector extends Component {
    state = {
        isShowPreview: false
    };

    handleZoneClick = (zone, screen) => {
        const {navigation, setActiveZone} = this.props;
        navigation.navigate('ARScanner', { screen: screen });
        setActiveZone(zone, screen);
    };

    handlePreviewOpen = () => {
        this.setState({isShowPreview: true})
    };

    handlePreviewClose = () => {
        this.setState({isShowPreview: false})
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    render() {
        const {t} = this;
        const {isShowPreview} = this.state;
        const title = t('ar.zone.title');
        const zones = [
            {
                key: 1,
                label: t('ar.zone.zone1'),
                screen: 'ScannerZone1'
            },
            {
                key: 2,
                label: t('ar.zone.zone2'),
                screen: 'ScannerZone2'
            },
            {
                key: 3,
                label: t('ar.zone.zone3'),
                screen: 'ScannerZone3'
            },
            {
                key: 4,
                label: t('ar.zone.zone4'),
                screen: 'ScannerZone4'
            },
            {
                key: 5,
                label: t('ar.zone.zone5'),
                screen: 'ScannerZone5'
            },
            {
                key: 6,
                label: t('ar.zone.zone6'),
                screen: 'ScannerZone6'
            },

        ];
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
            <Theme>
                <ScrollView>
                    <Container>
                        <View style={styles.contentContainer}>
                            <Map mapUrls={mapUrls} onPress={this.handlePreviewOpen} />
                        </View>
                        <TitleText>{title}</TitleText>
                        {
                            zones.map((zone, index) => {
                                const {key, label, screen} = zone;
                                const handleClick = () => this.handleZoneClick(key, screen);
                                return (
                                    <ThreeDBox key={index}>
                                        <Touch onPress={handleClick}>
                                            <ThreeDText>{label} ></ThreeDText>
                                        </Touch>
                                    </ThreeDBox>
                                )
                            })
                        }
                        {mapUrls && <ImagesPreviewModal visible={isShowPreview} images={imagesPreview} onClose={this.handlePreviewClose} />}
                    </Container>
                </ScrollView>

            </Theme>
        );
    }
}

const Map = props => {
    const {mapUrls, onPress} = props;
    return (
        <Swiper
            style={styles.wrapper}
            containerStyle={styles.itemContainer}
            autoplay
            loop
            autoplayTimeout={5}
            removeClippedSubviews={false}
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


const styles = StyleSheet.create({
    contentContainer: {
        marginTop: Platform.OS === 'ios'? 39 : 49,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        position: 'relative',
        height: width - 106,
        marginBottom: 20,
        maxWidth: 350,
        maxHeight: 350,
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
