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
import {translate} from "../../helpers/translates";

const { width } = Dimensions.get('window')

class FindUsScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    componentDidMount() {
        const {getAboutUsFindFromApi} = this.props;
        getAboutUsFindFromApi();
    }

    render() {
        const {findData={}} = this.props;
        const {mapUrl, address} = findData;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Map mapUrl={mapUrl} />
                    <Address address={address} />
                    <GoButton t={this.t} />
                </View>
            </SafeAreaView>
        )
    }
}

export default FindUsScreen;

const Map = props => {
    const {mapUrl} = props;
    return (
        <Image style={styles.map} source={{uri: mapUrl}} />
    )
};

const Address = props => {
    const {address} = props;
    return (
        <View style={styles.addressContainer}>
            <Text>{address}</Text>
        </View>
    );
};

const GoButton = props => {
    const {t} = props;
    const goLabel = t('map.labels.go');
    return (
        <TouchableOpacity style={styles.goButtonContainer}>
            <Text style={styles.goButton}>{goLabel}</Text>
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