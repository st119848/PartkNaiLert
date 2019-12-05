"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import PicTest from "../../../assets/24.jpeg";

import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "react-viro";

const createReactClass = require("create-react-class");

const PNLAR = createReactClass({
	allMarkers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24","25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],

	getInitialState(marker) {
		const baseState = {
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
			marker: "test",
			isShow: false,
			bdShow: false,
			caShow: false,
		};
		const varyState = {};
		this.allMarkers.forEach(marker => {
			varyState["isShow" + marker] = false;
		});
		return {
			...baseState,
			...varyState,
		};
	},

	render: function () {
		return (
			<ViroARScene>
				{this.allMarkers.map((marker, index) => (
					<ViroARImageMarker
						target={marker}
						onAnchorFound={() => {
							this.props.sceneNavigator.viroAppProps.onAnchored(marker)
							//to navigate to detail component
							Actions.detail({ // go to markerDetail
								renderText: true,
								textLangTitle: String(ARData[marker - 1].value[0].title),
								textLangDetail: String(ARData[marker - 1].value[0].detail),
								showARScene:this.props.sceneNavigator.viroAppProps.showARScene,
								marker:marker // send marker to the markerDetail
							});
							this._onAnchorFound(marker);
						}}
						key={index}
						pauseUpdates={this.state.pauseUpdates}>
					</ViroARImageMarker>
				))}
			</ViroARScene>
		);
	},
	_onAnchorFound(marker) {
		// Show only when isShow is all false
		let allNotShow = true;
		alert(marker);
		this.allMarkers.forEach(marker => {
			if (this.state["isShow" + marker]) {
				console.log("all not show false ");
				allNotShow = false;
			}
		});
		if (allNotShow) {
			let stateForSet = { animateObject: true };
			stateForSet["isShow" + marker] = true;
			this.setState(stateForSet);
		};
	},
});

ViroARTrackingTargets.createTargets({
	"1": {
		source: require("../../../assets/1.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[0].physicalWidth, // real world width in meters
	},
	"2": {
		source: require("../../../assets/2.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[1].physicalWidth, // real world width in meters
	},
	"3": {
		source: require("../../../assets/3.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[2].physicalWidth, // real world width in meters
	},
	"4": {
		source: require("../../../assets/4.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[3].physicalWidth, // real world width in meters
	},
	"5": {
		source: require("../../../assets/5.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[4].physicalWidth, // real world width in meters
	},
	"6": {
		source: require("../../../assets/6.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[5].physicalWidth, // real world width in meters
	},
	"7": {
		source: require("../../../assets/7.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[6].physicalWidth, // real world width in meters
	},
	"8": {
		source: require("../../../assets/8.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[7].physicalWidth, // real world width in meters
	},
	"9": {
		source: require("../../../assets/9.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[8].physicalWidth, // real world width in meters
	},
	"10": {
		source: require("../../../assets/10.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[9].physicalWidth, // real world width in meters
	},
	"11": {
		source: require("../../../assets/11.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[10].physicalWidth, // real world width in meters
	},
	"12": {
		source: require("../../../assets/12.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[11].physicalWidth, // real world width in meters
	},
	"13": {
		source: require("../../../assets/13.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[12].physicalWidth, // real world width in meters
	},
	"14": {
		source: require("../../../assets/14.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[13].physicalWidth, // real world width in meters
	},
	"15": {
		source: require("../../../assets/15.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[14].physicalWidth, // real world width in meters
	},
	"16": {
		source: require("../../../assets/16.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[15].physicalWidth, // real world width in meters
	},
	"17": {
		source: require("../../../assets/17.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[16].physicalWidth, // real world width in meters
	},
	"18": {
		source: require("../../../assets/18.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[17].physicalWidth, // real world width in meters
	},
	"19": {
		source: require("../../../assets/19.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[18].physicalWidth, // real world width in meters
	},
	"20": {
		source: require("../../../assets/20.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[19].physicalWidth, // real world width in meters
	},
	"21": {
		source: require("../../../assets/22.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[20].physicalWidth, // real world width in meters
	},
	"22": {
		source: require("../../../assets/22.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[21].physicalWidth, // real world width in meters
	},
	"23": {
		source: require("../../../assets/23.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[22].physicalWidth, // real world width in meters
	},
	"24": {
		source: require("../../../assets/24.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[23].physicalWidth, // real world width in meters
	},
	"25": {
		source: require("../../../assets/24.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[24].physicalWidth, // real world width in meters
	},
	"26": {
		source: require("../../../assets/26.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[25].physicalWidth, // real world width in meters
	},
	"27": {
		source: require("../../../assets/27.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[26].physicalWidth, // real world width in meters
	},
	"28": {
		source: require("../../../assets/28.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[27].physicalWidth, // real world width in meters
	},
	"29": {
		source: require("../../../assets/29.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[28].physicalWidth, // real world width in meters
	},
	"30": {
		source: require("../../../assets/30.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[29].physicalWidth, // real world width in meters
	},
	"31": {
		source: require("../../../assets/31.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[30].physicalWidth, // real world width in meters
	},
	"32": {
		source: require("../../../assets/32.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[31].physicalWidth, // real world width in meters
	},
	"33": {
		source: require("../../../assets/33.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[32].physicalWidth, // real world width in meters
	},
	"34": {
		source: require("../../../assets/34.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[33].physicalWidth, // real world width in meters
	},
	"35": {
		source: require("../../../assets/35.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[34].physicalWidth, // real world width in meters
	},
	"36": {
		source: require("../../../assets/36.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[35].physicalWidth, // real world width in meters
	},
	"37": {
		source: require("../../../assets/37.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[36].physicalWidth, // real world width in meters
	},
	"38": {
		source: require("../../../assets/38.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[37].physicalWidth, // real world width in meters
	},
	"39": {
		source: require("../../../assets/39.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[38].physicalWidth, // real world width in meters
	},
	"40": {
		source: require("../../../assets/40.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[39].physicalWidth, // real world width in meters
	},
	"41": {
		source: require("../../../assets/41.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[40].physicalWidth, // real world width in meters
	},
	"42": {
		source: require("../../../assets/42.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[41].physicalWidth, // real world width in meters
	},
	"43": {
		source: require("../../../assets/43.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[42].physicalWidth, // real world width in meters
	},
	"44": {
		source: require("../../../assets/44.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[43].physicalWidth, // real world width in meters
	},
	"45": {
		source: require("../../../assets/45.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[44].physicalWidth, // real world width in meters
	},
	"46": {
		source: require("../../../assets/46.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[45].physicalWidth, // real world width in meters
	},
	"47": {
		source: require("../../../assets/47.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[46].physicalWidth, // real world width in meters
	},
	"48": {
		source: require("../../../assets/48.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[47].physicalWidth, // real world width in meters
	},
	"49": {
		source: require("../../../assets/49.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[48].physicalWidth, // real world width in meters
	},
	"50": {
		source: require("../../../assets/50.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[49].physicalWidth, // real world width in meters
	}
});

export default PNLAR;
