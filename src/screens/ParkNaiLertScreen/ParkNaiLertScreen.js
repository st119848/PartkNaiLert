import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    View,
    ImageBackground,
    StatusBar
} from 'react-native';
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import ARIcon from '../../assets/img/ar_icon.png';
import BGImage from '../../assets/img/garden_bg.jpg';
import LogoImage from '../../assets/img/logo.png';
import {translate} from "../../helpers/translates";
import SetPageModal from "../../components/modals/SetPageModal";
import HamburgerButton from "../../components/HamburgerButton";
import ARModal from "../../components/modals/ARModal";

class ParkNaiLertScreen extends Component {
    static navigationOptions = ({navigation}) => {
        const leftOnPress = navigation.getParam('leftOnPress');
        return {
            headerTitle: <HeaderLogo />,
            headerRight: <BeaconStatusIcon />,
            headerLeft: <HamburgerButton onPress={leftOnPress} />,
            headerBackTitle: null,
            headerTintColor: 'rgb(125, 105 , 87)'
        }
    };

    state = {
        isShowSetPage: false,
        isShowArScreen: false,
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    handleHamburgerClick = () => {
        this.setState({
            isShowSetPage: true,
        })
    };

    handleARButtonClick = () => {
        this.setState({
            isShowArScreen: true,
        })
    };

    handleChangePage = (page) => {
        this.handleCloseModal();
        const {navigation} = this.props;
        navigation.navigate(page);
    };

    handleCloseModal = () => {
        this.setState({
            isShowSetPage: false,
            isShowArScreen: false,
        })
    };

    componentDidMount() {
        const {navigation} = this.props;
        navigation.setParams({
            leftOnPress: this.handleHamburgerClick
        });
    }

    render() {
        const {isShowSetPage, isShowArScreen} = this.state;
        const barStyle = (isShowSetPage || isShowArScreen) ? 'light-content' : 'default';
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={barStyle} />
                <Content t={this.t} />
                <ARButton onPress={this.handleARButtonClick}/>
                <SetPageModal
                    active="PNL"
                    visible={isShowSetPage}
                    onClose={this.handleCloseModal}
                    onChangePage={this.handleChangePage}
                />
                <ARModal
                    scene='ARCarDemo'
                    visible={isShowArScreen}
                    onClose={this.handleCloseModal}
                />
            </SafeAreaView>
        )
    }
}

const Content = props => {
    return (
        <ImageBackground source={BGImage} style={styles.contentContainer}>
            <View style={styles.bannerContainer}>
                <Logo />
                <Title {...props} />
            </View>
        </ImageBackground>
    )
};

const Title = props => {
    const {t} = props;
    const nailert = t('parkNaiLert.title.nailert');
    const heritage = t('parkNaiLert.title.heritage');
    const location = t('parkNaiLert.title.location');
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{nailert}</Text>
            <Text style={styles.title}>{heritage}</Text>
            <Text style={styles.title}>{location}</Text>
        </View>
    )
}

const Logo = props => {
    return (
        <Image resizeMode="contain" source={LogoImage} style={styles.logo} />
    )
}

const ARButton = props => {
    const {onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.arButtonContainer}>
            <Image style={styles.arButton} source={ARIcon} />
        </TouchableOpacity>
    );
};


export default ParkNaiLertScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'rgb(205, 94, 90)',
        width: '100%',
        justifyContent: 'center'
    },
    bannerContainer: {
        width: '80%',
        height: '60%',
        backgroundColor: 'rgba(125, 105 , 87, 0.9)',
        padding: 20,
        justifyContent: 'center'
    },
    titleContainer: {
        marginLeft: 10,
        paddingVertical: 20,
    },
    title: {
        fontSize: 30,
        letterSpacing: 0.5,
        color: 'white',
        marginTop: 5,
    },
    arButtonContainer: {
        width: 80,
        height: 80,
        marginVertical: 10,
        borderRadius: 40,
        overflow: 'hidden'
    },
    arButton: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 100,
        height: 50
    }
});