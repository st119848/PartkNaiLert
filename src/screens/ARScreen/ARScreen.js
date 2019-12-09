import React from "react";
import ScanTheObjectOne from "./../../data/AR/js/components/ScanTheObject/ScanTheObjectOne"
import ScanTheObjectTwo from "./../../data/AR/js/components/ScanTheObject/ScanTheObjectTwo"
import MarkerDetail from "./../../data/AR/js/components/MarkerDetail/MarkerDetail";
import ModelView from "./../../data/AR/js/components/3DModel/ModelView";
import Header from "./../../data/AR/js/components/Header/Header"
import ZoneSelector from "./../../data/AR/js/components/ZoneSelector/ZoneSelector";
import {Router, Stack, Scene} from "react-native-router-flux"

const ARScreen = props => {
    return (
        <Router>
            <Stack hideNavBar>
                <Scene key="zone" initial component={ZoneSelector} />
                <Scene key="scan1" component={ScanTheObjectOne} ThreeD={false} marker={0} showARScene={1} />
                <Scene key="scan2" component={ScanTheObjectTwo} ThreeD={false} marker={0} showARScene={1} />
                <Scene key="detail" component={MarkerDetail} />
                <Scene key="model" component={ModelView} />
                <Scene key="header" component={Header} />
            </Stack>
        </Router>
    );
};

export default ARScreen;