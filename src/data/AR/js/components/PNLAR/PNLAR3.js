"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import Pic35 from "../../../assets/35.jpg";
import Pic36 from "../../../assets/36.jpg";
import Pic37 from "../../../assets/37.jpg";
import Pic38 from "../../../assets/38.jpg";
import Pic39 from "../../../assets/39.jpg";
import Pic40 from "../../../assets/40.jpg";
import Pic41 from "../../../assets/41.jpg";
import Pic42 from "../../../assets/42.jpg";
import Pic43 from "../../../assets/43.jpg";
import Pic44 from "../../../assets/44.jpg";
import Pic45 from "../../../assets/45.jpg";
import Pic46 from "../../../assets/46.jpg";
import Pic47 from "../../../assets/47.jpg";
import Pic48 from "../../../assets/48.jpg";
import Pic49 from "../../../assets/49.jpg";
import Pic50 from "../../../assets/50.jpg";


import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "react-viro";
import {connect} from "react-redux";

const createReactClass = require("create-react-class");

const PNLAR3 = createReactClass({
	allMarkers: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],

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
							Actions.detail3({ // go to markerDetail
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
	"35": {
		source: Pic35,
		orientation: "Left",
		physicalWidth: ARData[34].physicalWidth, // real world width in meters
	},
	"36": {
		source: Pic36,
		orientation: "Left",
		physicalWidth: ARData[35].physicalWidth, // real world width in meters
	},
	"37": {
		source: Pic37,
		orientation: "Left",
		physicalWidth: ARData[36].physicalWidth, // real world width in meters
	},
	"38": {
		source: Pic38,
		orientation: "Left",
		physicalWidth: ARData[37].physicalWidth, // real world width in meters
	},
	"39": {
		source: Pic39,
		orientation: "Left",
		physicalWidth: ARData[38].physicalWidth, // real world width in meters
	},
	"40": {
		source: Pic40,
		orientation: "Left",
		physicalWidth: ARData[39].physicalWidth, // real world width in meters
	},
	"41": {
		source: Pic41,
		orientation: "Left",
		physicalWidth: ARData[40].physicalWidth, // real world width in meters
	},
	"42": {
		source: Pic42,
		orientation: "Left",
		physicalWidth: ARData[41].physicalWidth, // real world width in meters
	},
	"43": {
		source: Pic43,
		orientation: "Left",
		physicalWidth: ARData[42].physicalWidth, // real world width in meters
	},
	"44": {
		source: Pic44,
		orientation: "Left",
		physicalWidth: ARData[43].physicalWidth, // real world width in meters
	},
	"45": {
		source: Pic45,
		orientation: "Left",
		physicalWidth: ARData[44].physicalWidth, // real world width in meters
	},
	"46": {
		source: Pic46,
		orientation: "Left",
		physicalWidth: ARData[45].physicalWidth, // real world width in meters
	},
	"47": {
		source: Pic47,
		orientation: "Left",
		physicalWidth: ARData[46].physicalWidth, // real world width in meters
	},
	"48": {
		source: Pic48,
		orientation: "Left",
		physicalWidth: ARData[47].physicalWidth, // real world width in meters
	},
	"49": {
		source: Pic49,
		orientation: "Left",
		physicalWidth: ARData[48].physicalWidth, // real world width in meters
	},
	"50": {
		source: Pic50,
		orientation: "Left",
		physicalWidth: ARData[49].physicalWidth, // real world width in meters
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
export default connect(mapStateToProps, mapDispatchToProps)(PNLAR3)

