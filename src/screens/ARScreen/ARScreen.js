import React from "react";
import ScanTheObject from "./../../data/AR/js/components/ScanTheObject/ScanTheObject"
import MarkerDetail from "./../../data/AR/js/components/MarkerDetail/MarkerDetail";
import ModelView from "./../../data/AR/js/components/3DModel/ModelView";
import Header from "./../../data/AR/js/components/Header/Header"
import {Router, Stack, Scene} from "react-native-router-flux"

const ARScreen = props => {
    return (
        <Router>
            <Stack hideNavBar>
                <Scene key="scan" initial component={ScanTheObject} ThreeD={false} marker={0} showARScene={1}/>
                <Scene key="detail" component={MarkerDetail}/>
                <Scene key="model" component={ModelView}/>
                <Scene key="header" component={Header}/>
            </Stack>
        </Router>
    );
};

export default ARScreen;