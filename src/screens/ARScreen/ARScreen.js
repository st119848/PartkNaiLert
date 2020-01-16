import React, {Component} from "react";
import ScanTheObjectOne from "./../../data/AR/js/components/ScanTheObject/ScanTheObjectOne"
import ScanTheObjectTwo from "./../../data/AR/js/components/ScanTheObject/ScanTheObjectTwo"
import ScanTheObjectThree from "./../../data/AR/js/components/ScanTheObject/ScanTheObjectThree"
import MarkerDetail1 from "./../../data/AR/js/components/MarkerDetail/MarkerDetail1";
import MarkerDetail2 from "./../../data/AR/js/components/MarkerDetail/MarkerDetail2";
import MarkerDetail3 from "./../../data/AR/js/components/MarkerDetail/MarkerDetail3";
import Header from "./../../data/AR/js/components/Header/Header"
import ZoneSelector from "./../../data/AR/js/components/ZoneSelector/ZoneSelector";
import {Router, Stack, Scene} from "react-native-router-flux"
import {translate} from "../../helpers/translates";

export default class ARScreen extends Component {
    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    }
    render() {
        return (
            <Router>
                <Stack hideNavBar>
                    <Scene key="zone" initial component={ZoneSelector} t={this.t} />
                    <Scene key="scan1" component={ScanTheObjectOne} ThreeD={false} marker={0} showARScene={1} t={this.t} />
                    <Scene key="scan2" component={ScanTheObjectTwo} ThreeD={false} marker={0} showARScene={1} t={this.t} />
                    <Scene key="scan3" component={ScanTheObjectThree} ThreeD={false} marker={0} showARScene={1} t={this.t} />
                    <Scene key="detail1" component={MarkerDetail1} t={this.t} />
                    <Scene key="detail2" component={MarkerDetail2} t={this.t} />
                    <Scene key="detail3" component={MarkerDetail3} t={this.t} />
                    <Scene key="header" component={Header} t={this.t}  />
                </Stack>
            </Router>
        );
    }
};