"use strict";

import React, { Component } from "react";
import PNLAR1 from "../PNLAR/PNLAR1";
import PNLARThree1 from "../PNLAR/PNLARThree1";
import ARData from "../../../assets/ARData.json";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import MarkerDetail from "../MarkerDetail/MarkerDetail1";
import { Theme, BottomText, Border } from "./style";
import { Actions } from "react-native-router-flux";

var createReactClass = require("create-react-class");
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

var ScanTheObjectOne = createReactClass({
	getInitialState(marker) {
		const detailState = {
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",

		};
		return {
			...detailState,
		};
	},

	
	
	render: function() {

		if (this.props.showARScene == 1) { // check showARScene if  from default ==1  do and other ....
			return (
				<Theme>
					<Header renderBackArrow={true} source={require("../../../assets/black-cross.png")}/>
					<Border>
						<ViroARSceneNavigator
							initialScene={{ scene: PNLAR1 }} // go to PNLAR
							apiKey={apiKey}
							viroAppProps={{ onAnchored: this.onAnchored ,showARScene:this.state.showARScene}}
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
					<Header source={require("../../../assets/black-cross.png")}/>
					<Border>
						<ViroARSceneNavigator
							initialScene={{ scene: PNLARThree1 }}
							apiKey={apiKey}
							viroAppProps={{ onAnchored: this.onAnchored ,showARScene:this.state.showARScene}}
						/>
						<BottomText>
							Hover over the Object
							
							{/* {this.state.textLangTitle} */}
						</BottomText>
					</Border>
				</Theme>
			)
		}
	},
	onAnchored(marker) {
		// Actions.detail({textLangTitleTest: String(ARData[marker - 1].value[0].title)});
		// Actions.detail({textLangDetailTest: String(ARData[marker - 1].value[0].title)});
		// this.setState({
		// 	textLangTitle: String(ARData[marker - 1].value[0].title),
		// 	textLangDetail: String(ARData[marker - 1].value[0].detail),
		// 	tapJp: true,
		// });
	},
	
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ScanTheObjectOne;
