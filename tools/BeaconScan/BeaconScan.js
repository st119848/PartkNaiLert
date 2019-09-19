import React, {Component} from 'react'
import {View} from 'react-native'
import * as RNEP from "@estimote/react-native-proximity";
import APP_CONFIG from '../../src/config/app'

const ESTIMOTE_APP_ID = APP_CONFIG.estimoteAppId;
const ESTIMOTE_APP_TOKEN = APP_CONFIG.estimoteAppToken;

class BeaconScan extends Component {

    async componentDidMount() {
        console.log('test');
        const {getBeaconConfig} = this.props;
        const beaconsConfig = await getBeaconConfig();
        if(beaconsConfig) {
            this.beaconScanZone(beaconsConfig)
        }
    }

    beaconScanZone = (beaconsConfig) => {
        const {getBeaconContentFromApi, setEnterBeaconZone, setExitBeaconZone} = this.props;
        const zones = beaconsConfig.map(config => {
            const {tag, distance} = config;
            const zone = new RNEP.ProximityZone(distance, tag);
            zone.onEnterAction = () => {
                setEnterBeaconZone(tag);
            };
            zone.onExitAction = () => {
                setExitBeaconZone();
            };
            zone.onChangeAction = contexts => {
                const [context] = contexts;
                context && console.log('change', context.deviceIdentifier,);
                context && getBeaconContentFromApi(context.deviceIdentifier);
            };

            return zone;
        });

        RNEP.locationPermission.request().then(
            permission => {

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

export default BeaconScan;




