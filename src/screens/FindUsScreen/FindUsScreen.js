import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Linking,
    Platform,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import {translate} from "../../helpers/translates";
import LangSettingButton from "../../components/header/LangSettingButton";
import HeaderTitle from "../../components/header/HeaderTitle";
import BG from "../../assets/img/bg_main.png";

const { width } = Dimensions.get('window')

class FindUsScreen extends Component {
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
            headerTitle: <HeaderTitle title='Find Us' />,
        };
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
        const {mapUrl} = findData;
        return (
            <ImageBackground source={BG} style={styles.outtercontainer}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Map mapUrl={mapUrl} />
                    </View>
                    <GoButton onPress={this.handleClickMap} t={this.t} />
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

export default FindUsScreen;

const Map = props => {
    const {mapUrl} = props;
    return (
        <View style={styles.mapContainer}>
            <Image style={styles.map} source={{uri: mapUrl}} />
        </View>
    )
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
    outtercontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        marginTop: Platform.OS === 'ios'? 59 : 69,
        marginHorizontal: 15,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        position: 'relative',
        height: '50%'
    },
    titleContainer: {
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'rgb(125, 105 , 87)',
        top: 10,
        left: 0,
        right: 0,
        paddingLeft: 25,
        position: 'absolute',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,

    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapContainer: {
        width: '100%',
        height: '100%',
        padding: 10,
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
        marginHorizontal: 15,
        alignSelf: 'stretch',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#655327',
        marginVertical: 15,
    },
    goButton: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular',
    }
});