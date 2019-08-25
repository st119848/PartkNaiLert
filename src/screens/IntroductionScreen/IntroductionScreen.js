import React, {Component} from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native'
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";

class IntroductionScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };

    componentDidMount() {
        const {getAboutUsIntroFromApi} = this.props;
        getAboutUsIntroFromApi();
    }

    render() {
        const {introData} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <Indicator />
                    <Content {...introData} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const Indicator = props => {
    return (
        <View style={styles.indicator}/>
    )
};

const Content = props => {
    const {imageUrl, description} = props;return (
        <View style={styles.contentContainer}>
            <CoverImage image={imageUrl} />
            <Description description={description} />
        </View>
    )
}

const CoverImage = props => {
    const {image} = props;
    return (
        <View style={styles.imageContainer}>
            <Image resizeMode="contain" source={{uri: image}} style={styles.image}/>
        </View>
    )
};

const Description = props => {
    const {description} = props;
    return (
        <Text style={styles.description}>{description}</Text>
    )
};

export default IntroductionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242, 218, 217)'
    },
    scrollContainer: {
        flex: 1,
    },
    indicator: {
        flex: 1,
        height: 10,
        backgroundColor: 'rgb(125, 105 , 87)',
        marginHorizontal: 20,
        marginTop: 20,
    },
    contentContainer: {
        padding: 10,
        paddingTop: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        minHeight: '100%',
        borderRadius: 2,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: 280,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: 'dimgrey',
    }
});