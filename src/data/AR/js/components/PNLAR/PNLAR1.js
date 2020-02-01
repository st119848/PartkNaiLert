"use strict";

import React, { Component } from "react";
import {connect} from "react-redux";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import Pic1 from "../../../assets/1.jpg";
import Pic2 from "../../../assets/2.jpg";
import Pic3 from "../../../assets/3.jpg";
import Pic4 from "../../../assets/4.jpg";
import Pic5 from "../../../assets/5.jpg";
import Pic6 from "../../../assets/6.jpg";
import Pic7 from "../../../assets/7.jpg";
import Pic8 from "../../../assets/8.jpg";
import Pic9 from "../../../assets/9.jpg";
import Pic10 from "../../../assets/10.jpg";
import Pic11 from "../../../assets/11.jpg";
import Pic12 from "../../../assets/12.jpg";
import Pic13 from "../../../assets/13.jpg";
import Pic14 from "../../../assets/14.jpg";
import Pic15 from "../../../assets/15.jpg";
import Pic16 from "../../../assets/16.jpg";
import Pic17 from "../../../assets/17.jpg";
import Pic18 from "../../../assets/18.jpg";
import Pic19 from "../../../assets/19.jpg";


import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "react-viro";

const createReactClass = require("create-react-class");

const PNLAR1 = createReactClass({
	allMarkers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],

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
	getMarkerInfo(marker) {
		const {languageId} = this.props;
		const arMarkerData = ARData[marker - 1].value || [];
		const arMarkerDataByLang = arMarkerData.find((item) => item.language_id === languageId) || {};
		const title = String(arMarkerDataByLang.title);
		const detail = String(arMarkerDataByLang.detail);
		return {
			title,
			detail,
		}
	},
	render: function () {

		return (
			<ViroARScene>
				{this.allMarkers.map((marker, index) => (
					<ViroARImageMarker
						target={marker}
						onAnchorFound={() => {
							this.props.sceneNavigator.viroAppProps.onAnchored(marker);
							const {title, detail} = this.getMarkerInfo(marker);
							//to navigate to detail component
							Actions.detail1({ // go to markerDetail
								renderText: true,
								textLangTitle: title,
								textLangDetail: detail,
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
		source: Pic1,
		orientation: "Left",
		physicalWidth: ARData[0].physicalWidth, // real world width in meters
	},
	"2": {
		source: Pic2,
		orientation: "Left",
		physicalWidth: ARData[1].physicalWidth, // real world width in meters
	},
	"3": {
		source: Pic3,
		orientation: "Left",
		physicalWidth: ARData[2].physicalWidth, // real world width in meters
	},
	"4": {
		source: Pic4,
		orientation: "Left",
		physicalWidth: ARData[3].physicalWidth, // real world width in meters
	},
	"5": {
		source: Pic5,
		orientation: "Left",
		physicalWidth: ARData[4].physicalWidth, // real world width in meters
	},
	"6": {
		source: Pic6,
		orientation: "Left",
		physicalWidth: ARData[5].physicalWidth, // real world width in meters
	},
	"7": {
		source: Pic7,
		orientation: "Left",
		physicalWidth: ARData[6].physicalWidth, // real world width in meters
	},
	"8": {
		source: Pic8,
		orientation: "Left",
		physicalWidth: ARData[7].physicalWidth, // real world width in meters
	},
	"9": {
		source: Pic9,
		orientation: "Left",
		physicalWidth: ARData[8].physicalWidth, // real world width in meters
	},
	"10": {
		source: Pic10,
		orientation: "Left",
		physicalWidth: ARData[9].physicalWidth, // real world width in meters
	},
	"11": {
		source: Pic11,
		orientation: "Left",
		physicalWidth: ARData[10].physicalWidth, // real world width in meters
	},
	"12": {
		source: Pic12,
		orientation: "Left",
		physicalWidth: ARData[11].physicalWidth, // real world width in meters
	},
	"13": {
		source: Pic13,
		orientation: "Left",
		physicalWidth: ARData[12].physicalWidth, // real world width in meters
	},
	"14": {
		source: Pic14,
		orientation: "Left",
		physicalWidth: ARData[13].physicalWidth, // real world width in meters
	},
	"15": {
		source: Pic15,
		orientation: "Left",
		physicalWidth: ARData[14].physicalWidth, // real world width in meters
	},
	"16": {
		source: Pic16,
		orientation: "Left",
		physicalWidth: ARData[15].physicalWidth, // real world width in meters
	},
	"17": {
		source: Pic17,
		orientation: "Left",
		physicalWidth: ARData[16].physicalWidth, // real world width in meters
	},
	"18": {
		source: Pic18,
		orientation: "Left",
		physicalWidth: ARData[17].physicalWidth, // real world width in meters
	},
	"19": {
		source: Pic19,
		orientation: "Left",
		physicalWidth: ARData[18].physicalWidth, // real world width in meters
	}
});

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

const mapStateToProps = (state) => {
	return {
		languageId: state.setting.languageId,
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(PNLAR1)
