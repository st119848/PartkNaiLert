import React, {Component} from "react";
import ScanTheObject1 from "./components/ARScan/ScanTheObject1"
import ScanTheObject2 from "./components/ARScan/ScanTheObject2"
import ScanTheObject3 from "./components/ARScan/ScanTheObject3"
import ScanTheObject4 from "./components/ARScan/ScanTheObject4"
import ScanTheObject5 from "./components/ARScan/ScanTheObject5"
import ScanTheObject6 from "./components/ARScan/ScanTheObject6"
import Index from "./components/MarkerDetail";
import Header from "./components/Header/Header"
import ZoneSelector from "./components/ZoneSelector/ZoneSelector";
import {Router, Stack, Scene} from "react-native-router-flux"
import {translate} from "../../helpers/translates";

export default class ARScreen extends Component {
    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };
    render() {
        const {languageId} = this.props;
        return (
            <Router>
                <Stack hideNavBar>
                    <Scene key="zone" initial component={ZoneSelector} t={this.t} />
                    <Scene key="scan1" component={ScanTheObject1} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                    <Scene key="scan2" component={ScanTheObject2} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                    <Scene key="scan3" component={ScanTheObject3} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                    <Scene key="scan4" component={ScanTheObject4} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                    <Scene key="scan5" component={ScanTheObject5} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                    <Scene key="scan6" component={ScanTheObject6} ThreeD={false} marker={0} showARScene={1} t={this.t} languageId={languageId} />
                    <Scene key="detail" component={Index} t={this.t}/>
                    <Scene key="header" component={Header} t={this.t}  />
                </Stack>
            </Router>
        );
    }
};