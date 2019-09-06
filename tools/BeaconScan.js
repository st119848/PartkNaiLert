import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as RNEP from "@estimote/react-native-proximity";

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingBeaconActive, settingBeaconInfo } from "../src/reducers/actions/setting";

// import beacon from "../src/data/beacon";

const ESTIMOTE_APP_ID = "-proximity-for-multiple-be-dt6";
const ESTIMOTE_APP_TOKEN = "6b90134a2016d2d71ac1f70f8f3dc406";

export class BeaconScan extends Component {
  constructor () {
    super()
    this.state = {
      beacon_id : [{}],
    }
  }

componentWillMount(){
  this.beaconScanZone()
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

setBeaconInfo = (beacondatas) =>{
 this.props.settingBeaconInfo(beacondatas)
}






beaconScanZone = ()=>{
  const zone1 = new RNEP.ProximityZone(1, "Parknailert");
  console.log(zone1);
  zone1.onEnterAction = context => {
    this.props.settingBeaconActive(true)
    console.log("zone1 onEnter", context.deviceIdentifier);
    // alert(context.deviceIdentifier)
  };
  zone1.onExitAction = context => {
    this.props.settingBeaconActive(false)
    console.log("zone1 onExit", context.deviceIdentifier);
  };
  zone1.onChangeAction = contexts => {
    console.log("zone1 onChange", contexts);
    // this.getBeacons(contexts)
  };
  
  const zone2 = new RNEP.ProximityZone(1, "Nong");
  zone2.onEnterAction = context => {
    console.log("zone2 onEnter", context);
  };
  zone2.onExitAction = context => {
    console.log("zone2 onExit", context);
    
  };
  zone2.onChangeAction = contexts => {
    console.log("zone2 onChange", contexts);
    alert("zone2")
  };
  
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
        RNEP.proximityObserver.startObservingZones([zone1, zone2]);
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
}, dispatch)

const mapStateToProps = (state) => {
  return {
    language: state.setting.language
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BeaconScan)
// export default BeaconScan


