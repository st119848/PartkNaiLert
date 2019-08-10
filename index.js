/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import * as RNEP from "@estimote/react-native-proximity";
// import beaconNo from './src/data/beacon'

AppRegistry.registerComponent(appName, () => App);

// const ESTIMOTE_APP_ID = "-proximity-for-multiple-be-dt6";
// const ESTIMOTE_APP_TOKEN = "6b90134a2016d2d71ac1f70f8f3dc406";

// const zone1 = new RNEP.ProximityZone(1, "Parknailert");
// console.log("zone1:", zone1);

// zone1.onEnterAction = context => {
//   console.log("zone1 onEnter", context.deviceIdentifier);
//   alert(context.deviceIdentifier)
// };
// zone1.onExitAction = context => {
//   console.log("zone1 onExit", context.deviceIdentifier);
// };
// zone1.onChangeAction = contexts => {
//   console.log("zone1 onChange", contexts);
  
// };

// const zone2 = new RNEP.ProximityZone(1, "Nong");
// zone2.onEnterAction = context => {
//   console.log("zone2 onEnter", context);
// };
// zone2.onExitAction = context => {
//   console.log("zone2 onExit", context);
  
// };
// zone2.onChangeAction = contexts => {
//   console.log("zone2 onChange", contexts);
//   alert("zone2")
// };

// RNEP.locationPermission.request().then(
//   permission => {
//     // `permission` will be one of RNEP.locationPermission.DENIED, .ALWAYS, or .WHEN_IN_USE
//     console.log(`location permission: ${permission}`);

//     if (permission !== RNEP.locationPermission.DENIED) {
//       const credentials = new RNEP.CloudCredentials(
//         ESTIMOTE_APP_ID,
//         ESTIMOTE_APP_TOKEN
//       );

//       const config = {
//         // modern versions of Android require a notification informing the user that the app is active in the background
//         // if you don't need proximity observation to work in the background, you can omit the entire `notification` config
//         //
//         // see also: "Background support" section in the README
//         notification: {
//           title: "Exploration mode is on",
//           text: "We'll notify you when you're next to something interesting.",
//           //icon: 'my_drawable', // if omitted, will default to the app icon (i.e., mipmap/ic_launcher)

//           // in apps targeting Android API 26, notifications must specify a channel
//           // https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels
//           channel: {
//             id: "exploration-mode",
//             name: "Exploration Mode"
//           }
//         }
//       };

//       RNEP.proximityObserver.initialize(credentials, config);
//       RNEP.proximityObserver.startObservingZones([zone1, zone2]);
//     }
//   },
//   error => {
//     console.error("Error when trying to obtain location permission", error);
//   }
// );