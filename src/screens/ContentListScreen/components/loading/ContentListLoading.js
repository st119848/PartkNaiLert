import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import {Rect} from 'react-native-svg'
import {
    Dimensions,
    Platform,
    ScrollView,
    StyleSheet,
    View
} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

const {width} = Dimensions.get('window');

const ContentListLoading = props => {
    return (
        <ScrollView style={styles.container}>
            { [...Array(5)].map((_,key) => {
                return (
                    <View style={styles.itemContainer} key={key}>
                        <ItemLoader />
                    </View>
                )
            })}
        </ScrollView>
    )
};

const ItemLoader= () => {
    const screenWidth = width > 500 ? 500 : width;
    const paddingHorizontal = 25;
    const itemWidth = screenWidth - (paddingHorizontal*2);
    const containerHeight = 300;
    return (
        <SvgAnimatedLinearGradient width={screenWidth} height={containerHeight} duration={200}>
            <Image x={paddingHorizontal} width={itemWidth} />
            <Title x={paddingHorizontal} width={itemWidth} />
            <Description x={paddingHorizontal} width={itemWidth} />
        </SvgAnimatedLinearGradient>
    )
};

const Image = ({x, width}) => {
    return (
        <Rect rx="5" ry="5"  x={x} y={0} width={width} height={200} />
    )
};

const Title = ({x, width}) => {
    return (
        <Rect rx="5" ry="5"  x={x} y={210} width={width} height={22} />
    )
};

const Description = ({x, width}) => {
    return (
        <Rect rx="5" ry="5"  x={x} y={242} width={width} height={55} />
    )
}

export default ContentListLoading;

const marginTop = Platform.OS === 'ios'? getStatusBarHeight() + 44: 54;

const itemWidth = (width-30);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: marginTop,
        paddingHorizontal: 15,
    },
    itemContainer: {
        width: itemWidth > 500 ? 500 : itemWidth,
        marginTop: 15,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});