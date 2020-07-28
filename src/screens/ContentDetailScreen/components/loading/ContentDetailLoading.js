import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import {Rect} from 'react-native-svg'
import {
    Dimensions, Platform, ScrollView,
    StyleSheet, View
} from "react-native";

const {width} = Dimensions.get('window');

class ContentDetailLoading extends React.Component {

    state = {
        containerHeight: undefined,
    };

    findDimensions = (event) => {
        const {height} = event.nativeEvent.layout;
        this.setState({containerHeight: height})
    };

    render() {
        const {containerHeight} = this.state;
        const paddingHorizontal = 25;
        const containerWidth = width - (paddingHorizontal*2);
        return (
            <View style={styles.container} onLayout={this.findDimensions}>
                <SvgAnimatedLinearGradient width={containerWidth} height={containerHeight} duration={800}>
                    { containerHeight && <Content width={containerWidth} containerHeight={containerHeight}/>}
                </SvgAnimatedLinearGradient>
            </View>
        )
    }
}

const Content = ({width, containerHeight}) => {
    const imageContainerHeight= ((containerHeight)/2) - 20;
    return (
        <>
            <Image width={width} containerHeight={containerHeight}/>
            <Title width={width} imageContainerHeight={imageContainerHeight}/>
            <Description width={width} containerHeight={containerHeight} imageContainerHeight={imageContainerHeight} />
        </>
    )
};

const Image = ({width, containerHeight}) => {
    const imageContainerHeight= ((containerHeight)/2) - 20;
    return (
        <Rect x={0} y={0} width={width} height={imageContainerHeight} />
    )
};

const Title = ({width, imageContainerHeight}) => {
    const y = imageContainerHeight + 10;
    return (
        <Rect x={0} y={y} width={width} height={35} />
    )
};

const Description = ({width, imageContainerHeight}) => {
    const y = imageContainerHeight + 55;
    const descHeight = imageContainerHeight - 55;
    return (
        <Rect x={0} y={y} width={width} height={descHeight} />
    );
};

export default ContentDetailLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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