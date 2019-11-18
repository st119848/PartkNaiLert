import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import {Rect} from 'react-native-svg'
import {Dimensions} from "react-native";

const {width} = Dimensions.get('window');

const HighLightLoading = props => {
    const containerWidth = (width-70);
    const itemWidth = containerWidth/3;
    const itemHeight  = itemWidth/4*3;
    const marginLeft = 0;
    const marginRight = 10;
    const containerHeight = itemHeight + 10;
    return (
        <SvgAnimatedLinearGradient width={containerWidth} height={containerHeight} duration={800}>
            { [...Array(3)].map((_,key) => {
                const x = marginLeft + (itemWidth*key) + (marginRight * key);
                return (
                    <Rect key={key} x={x} width={itemWidth} height={itemHeight} />
                )
            })}
        </SvgAnimatedLinearGradient>
    )
};

export default HighLightLoading;