import React, {Component} from 'react'
import {Text, View} from 'react-native'
import * as RNEP from "@estimote/react-native-proximity";

import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {settingBeaconActive, settingBeaconInfo} from "../src/reducers/actions/setting";
import {getBeaconConfig} from "../src/reducers/actions/beacon";
import APP_CONFIG from '../src/config/app'

// import beacon from "../src/data/beacon";

const ESTIMOTE_APP_ID = APP_CONFIG.estimoteAppId;
const ESTIMOTE_APP_TOKEN = APP_CONFIG.estimoteAppToken;

export class BeaconScan extends Component {
    constructor() {
        super()
        this.state = {
            beacon_id: [{}],
        }
    }

    async componentDidMount() {
        console.log('test');
        const {getBeaconConfig} = this.props;
        const beaconsConfig = await getBeaconConfig();
        if(beaconsConfig) {
            this.beaconScanZone(beaconsConfig)
        }
    }

// getBeacons = (contexts) => {
//   const dataBeacon = beacon[this.props.language]
//   const beacondatas = []
//   contexts.forEach(dataContexts => {
//     const filterBeacon = dataBeacon.find((beacon)=>{
//       return dataContexts.deviceIdentifier === beacon.identifier
//     })
//     beacondatas.push(filterBeacon)
//   });
//   this.setBeaconInfo(beacondatas)
//   console.log("getBeacons",beacondatas)
//
// }

    setBeaconInfo = (beacondatas) => {
        this.props.settingBeaconInfo(beacondatas)
    }

    beaconScanZone = (beaconsConfig) => {
        const zones = beaconsConfig.map(config => {
            const {tag, distance} = config;
            const zone = new RNEP.ProximityZone(distance, tag);
            zone.onEnterAction = context => {
                this.props.settingBeaconActive(true)
                console.log("zone1 onEnter", context.deviceIdentifier);
            };
            zone.onExitAction = context => {
                this.props.settingBeaconActive(false)
                console.log("zone1 onExit", context.deviceIdentifier);
            };
            zone.onChangeAction = contexts => {
                console.log("zone1 onChange", contexts);
            };

            return zone;
        });

        RNEP.locationPermission.request().then(
            permission => {
                console.log(`location permission: ${permission}`);

                if (permission !== RNEP.locationPermission.DENIED) {
                    const credentials = new RNEP.CloudCredentials(
                        ESTIMOTE_APP_ID,
                        ESTIMOTE_APP_TOKEN
                    );

                    const config = {
                        notification: {
                            title: "Exploration mode is on",
                            text: "We'll notify you when you're next to something interesting.",
                            //icon: 'my_drawable', // if omitted, will default to the app icon (i.e., mipmap/ic_launcher)
                            channel: {
                                id: "exploration-mode",
                                name: "Exploration Mode"
                            }
                        }
                    };

                    RNEP.proximityObserver.initialize(credentials, config);
                    RNEP.proximityObserver.startObservingZones(zones);
                }
            },
            error => {
                console.error("Error when trying to obtain location permission", error);
            }
        );
    }

    render() {
        return (
            <View/>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    settingBeaconActive,
    settingBeaconInfo,
    getBeaconConfig
}, dispatch)

const mapStateToProps = (state) => {
    return {
        language: state.setting.language
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BeaconScan)
// export default BeaconScan


