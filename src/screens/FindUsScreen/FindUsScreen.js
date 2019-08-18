import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";

const { width } = Dimensions.get('window')

class FindUsScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Map/>
                    <Address />
                    <GoButton />
                </View>
            </SafeAreaView>
        )
    }
}

export default FindUsScreen;

const Map = props => {
    const mapUrl = 'http://128.199.204.164:8000/public/images/ec8fe4bc.jpg';
    return (
        <Image style={styles.map} source={{uri: mapUrl}} />
    )
};

const Address = props => {
    const address = '4 ซอยสมคิด ถนนเพลินจิต กรุงเทพมหานคร 10330';
    return (
        <View style={styles.addressContainer}>
            <Text>{address}</Text>
        </View>
    );
};

const GoButton = props => {
    return (
        <TouchableOpacity style={styles.goButtonContainer}>
            <Text style={styles.goButton}>Go!</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 10,
        alignItems: 'center'
    },
    map: {
        height: width-20,
        width: width-20
    },
    addressContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        borderColor: 'lightgray',
        borderBottomWidth: 1,
    },
    address: {
        color: 'lightgray'
    },
    goButtonContainer: {
        height: 40,
        width: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(195, 82, 76)',
        marginVertical: 15,
    },
    goButton: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    }
});