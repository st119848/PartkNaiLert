import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    View,
    ImageBackground
} from 'react-native';
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import ARIcon from '../../assets/img/ar_icon.png';
import BGImage from '../../assets/img/garden_bg.jpg';
import LogoImage from '../../assets/img/logo.png';

class ParkNaiLertScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Content />
                <ARButton/>
            </SafeAreaView>
        )
    }
}

const Content = props => {
    return (
        <ImageBackground source={BGImage} style={styles.contentContainer}>
            <View style={styles.bannerContainer}>
                <Logo />
                <Title />
            </View>
        </ImageBackground>
    )
};

const Title = props => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>NAI LERT PARK</Text>
            <Text style={styles.title}>HERITAGE HOME</Text>
            <Text style={styles.title}>BANGKOK</Text>
        </View>
    )
}

const Logo = props => {
    return (
        <Image resizeMode="contain" source={LogoImage} style={styles.logo} />
    )
}

const ARButton = props => {
    return (
        <TouchableOpacity style={styles.arButtonContainer}>
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
        backgroundColor: 'red',
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