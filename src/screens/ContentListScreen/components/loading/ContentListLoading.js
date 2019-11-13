import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import {Rect} from 'react-native-svg'
import {
    Dimensions,
    ScrollView,
    StyleSheet
} from "react-native";

const {width} = Dimensions.get('window');

const ContentListLoading = props => {
    const screenWidth = width > 500 ? 500 : width;
    const paddingHorizontal = 15;
    const itemWidth = screenWidth - (paddingHorizontal*2);
    const itemHeight  = 315;
    const marginTop  = 15;
    const marginBottom = 15;
    const containerHeight = (itemHeight + 15) * 5;
    return (
        <ScrollView style={styles.container}>
            <SvgAnimatedLinearGradient width={screenWidth} height={containerHeight}>
                { [...Array(5)].map((_,key) => {
                    const y = marginTop + (itemHeight*key) + (marginBottom * key);
                    return (
                        <Rect x={paddingHorizontal} rx="5" ry="5" key={key} y={y} width={itemWidth} height={itemHeight} />
                    )
                })}
            </SvgAnimatedLinearGradient>
        </ScrollView>
    )
};

export default ContentListLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44,
    }
});