"use strict";

import React, { Component } from "react";
import PNLAR from "../PNLAR/PNLAR1";
import PNLARThree from "../PNLAR/PNLARThree";
import ARData from "../../../assets/ARData.json";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import MarkerDetail from "../MarkerDetail/MarkerDetail";
import { Theme, BottomText, Border } from "./style";
import { Actions } from "react-native-router-flux";

var createReactClass = require("create-react-class");
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

var showARScene = true;

class ModelView extends Component {
	render() {
		if (showARScene == true) {
			return (
				<Theme>
					<Header source={require("../../../assets/black-cross.png")} />
					<Border>

						<ViroARSceneNavigator
							initialScene={{ scene: PNLAR }}
							apiKey={apiKey}
							viroAppProps={{ onAnchored: this.onAnchored }}
						/>
						<BottomText>
							Scan The Object
							{/* {this.state.textLangTitle} */}
						</BottomText>
					</Border>
				</Theme>
			)
		}
		else {
			return (
				<Theme>
					<Header source={require("../../../assets/black-cross.png")} />
					<Border>
						<ViroARSceneNavigator
							initialScene={{ scene: PNLARThree }}
							apiKey={apiKey}
							viroAppProps={{ onAnchored: this.onAnchored }}
						/>
						<BottomText>
							Hover over the Object

							{/* {this.state.textLangTitle} */}
						</BottomText>
					</Border>
				</Theme>
			)
		}
	};
}
// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

export default ModelView;
