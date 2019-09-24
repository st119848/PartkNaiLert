import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Linking,
    Platform
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

    handleClickMap = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${13.745513},${100.54606}`;
        const label = 'Nai Lert Park';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    };

    componentDidMount() {
        const {getAboutUsFindFromApi} = this.props;
        getAboutUsFindFromApi();
    }

    render() {
        const {findData={}} = this.props;
        const {mapUrl, address} = findData;
        const title = this.t('menus.findUs');
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Title title={title.toUpperCase()} />
                    <Map mapUrl={mapUrl} />
                    <Address address={address} />
                </View>
                <GoButton onPress={this.handleClickMap} t={this.t} />
            </View>
        )
    }
}

export default FindUsScreen;

const Title = props => {
    const {title} = props;
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const Map = props => {
    const {mapUrl} = props;
    return (
        <View style={styles.mapContainer}>
            <Image style={styles.map} source={{uri: mapUrl}} />
        </View>
    )
};

const Address = props => {
    const {address} = props;
    return (
        <View style={styles.addressContainer}>
            <Text style={styles.address}>{address}</Text>
        </View>
    );
};

const GoButton = props => {
    const {t, onPress} = props;
    const goLabel = t('map.labels.go');
    return (
        <TouchableOpacity onPress={onPress} style={styles.goButtonContainer}>
            <Text style={styles.goButton}>{goLabel}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242, 218, 217)',
        alignItems: 'center',
        padding: 15,
    },
    contentContainer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        paddingTop: 65,
        position: 'relative',
    },
    titleContainer: {
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'rgba(125, 105 , 87, 0.4)',
        marginRight: -10,
        marginLeft: -10,
        top: 10,
        left: 0,
        right: 0,
        paddingLeft: 25,
        position: 'absolute',
    },
    title: {
        color: 'rgb(105,85,68)',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,

    },
    map: {
        width: '100%',
        height: width-50,
    },
    mapContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    addressContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    address: {
        color: 'dimgrey',
    },
    goButtonContainer: {
        height: 45,
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(195, 82, 76)',
        marginVertical: 15,
    },
    goButton: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    }
});