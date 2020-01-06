import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    Platform,
} from 'react-native'
import LangSettingButton from "../../components/header/LangSettingButton";
import HeaderTitle from "../../components/header/HeaderTitle";
import BG from "../../assets/img/bg_main.png";
import {SafeAreaView} from 'react-navigation'
import {getStatusBarHeight} from "react-native-status-bar-height";

class IntroductionScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const {state={}} = navigation;
        return {
            headerRight: <LangSettingButton routeName={state.routeName} />,
            headerBackTitle: null,
            headerTintColor: 'white',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: 'rgba(70, 41, 0, 0.8)',
            },
            headerTitle: <HeaderTitle title='Introduction' />,
        };
    };

    componentDidMount() {
        const {getAboutUsIntroFromApi} = this.props;
        getAboutUsIntroFromApi();
    }

    render() {
        const {introData} = this.props;
        return (
            <ImageBackground source={BG} style={styles.container}>
                <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainerStyle}>
                    <Content {...introData} />
                </ScrollView>
            </ImageBackground>
        )
    }
}

const Content = props => {
    const {imageUrl, description} = props;return (
        <View style={styles.contentContainer}>
            <CoverImage image={imageUrl} />
            <Description description={description} />
        </View>
    )
};

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

const marginTop = Platform.OS === 'ios'? getStatusBarHeight() + 44: 54;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    contentContainerStyle: {
        paddingVertical: marginTop,
    },
    contentContainer: {
        padding: 10,
        paddingTop: 20,
        margin: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        minHeight: '100%',
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
        color: '#645227',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular',
    }
});