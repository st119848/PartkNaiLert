import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import {Rect} from 'react-native-svg'
import {
    Dimensions, ScrollView,
    StyleSheet, View
} from "react-native";

const {width, height} = Dimensions.get('window');

const ContentDetailLoading = props => {
    return (
        <SvgAnimatedLinearGradient width={width} height={height}>
            <View style={styles.container}>
                <ImageLoader />
                <DetailLoader />
            </View>
        </SvgAnimatedLinearGradient>
    )
};

const ImageLoader = props => {
    const containerHeight= height/2;
    return (
        <Rect width={width} height={containerHeight} />
    )
};

const DetailLoader = props => {
    return (
        <View style={styles.detailContainer}>
            <Title/>
            <Description/>
        </View>
    )
};

const Title = props => {
    return (
        <View style={styles.titleContainer}>

        </View>
    )
};

const Description = props => {
    return (
        <ScrollView style={styles.descriptionContainer} contentContainerStyle={styles.descriptionContentContainer}>

        </ScrollView>
    )
};

export default ContentDetailLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailContainer: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -15,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 15,
        position: 'relative',
    },
    titleContainer: {
        width: '100%',
        paddingBottom: 10,
        paddingHorizontal: 15,
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
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
    description: {
        fontSize: 15,
        color: 'dimgrey',
    },
    descriptionContentContainer: {
        paddingVertical: 15
    },
});