import React, {Component} from "react";
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from "react-native";
import ScanTheObject1 from "./components/ARScan/ScanTheObject1"
import ScanTheObject2 from "./components/ARScan/ScanTheObject2"
import ScanTheObject3 from "./components/ARScan/ScanTheObject3"
import ScanTheObject4 from "./components/ARScan/ScanTheObject4"
import ScanTheObject5 from "./components/ARScan/ScanTheObject5"
import ScanTheObject6 from "./components/ARScan/ScanTheObject6"
import MarkerDetail from "./components/MarkerDetail";
import ZoneSelector from "./components/ZoneSelector/ZoneSelector";
import {Router, Stack, Scene} from "react-native-router-flux"
import {translate} from "../../helpers/translates";
import Header from "./components/Header/Header"
import Icon from "../../components/Icon";

export default class ARScreen extends Component {

    handleClose = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    render() {
        const {languageId} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Router>
                        <Stack hideNavBar>
                            <Scene key="zone" initial component={ZoneSelector} t={this.t} />
                            <Scene key="scan1" component={ScanTheObject1} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                            <Scene key="scan2" component={ScanTheObject2} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                            <Scene key="scan3" component={ScanTheObject3} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                            <Scene key="scan4" component={ScanTheObject4} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                            <Scene key="scan5" component={ScanTheObject5} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                            <Scene key="scan6" component={ScanTheObject6} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                            <Scene key="detail" component={MarkerDetail} t={this.t}/>
                            <Scene key="header" component={Header} t={this.t}  />
                        </Stack>
                    </Router>
                </View>
                <ARHeader onCloseClick={this.handleClose}/>
            </View>
        );
    }
};

const ARHeader = props => {
    const {onCloseClick} = props
    return (
        <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity onPress={onCloseClick}>
                <Icon name="close" style={styles.closeButton} size={35} />
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.9,
        position: 'relative',
    },

    headerContainer: {
        width: 49,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    closeButton: {
        color: 'white',
        paddingHorizontal: 10,
    },
});