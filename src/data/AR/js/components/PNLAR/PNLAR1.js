"use strict";

import React, { Component } from "react";
import {connect} from "react-redux";
import { Actions } from "react-native-router-flux";
import {getMarkers, getMarkerData} from "../../../../../helpers/ar";


import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "react-viro";

const markers = getMarkers(1);
console.log('markers', markers)
ViroARTrackingTargets.createTargets(markers);

class PNLAR1 extends Component{
	state = {
		markers: markers,
	};

	getMarkerInfo(marker) {
		const {languageId} = this.props;
		const arData = getMarkerData(marker, 1) || {};
		console.log('arData', arData);
		const {value: arTranslates=[], preview} = arData;
		const arMarkerDataByLang = arTranslates.find((item) => item.language_id === languageId) || {};
		const title = String(arMarkerDataByLang.title);
		const detail = String(arMarkerDataByLang.detail);
		return {
			title,
			detail,
			preview
		}
	}
	render() {
		const {sceneNavigator} = this.props;
		const {markers} = this.state;
		return (
			<ViroARScene>
				{Object.keys(markers).map((marker, index) => (
					<ViroARImageMarker
						target={marker}
						onAnchorFound={() => {
							sceneNavigator.viroAppProps.onAnchored(marker);
							const {title, detail, preview} = this.getMarkerInfo(marker);
							//to navigate to detail component
							Actions.detail1({ // go to markerDetail
								renderText: true,
								textLangTitle: title,
								textLangDetail: detail,
								preview: preview,
								showARScene:this.props.sceneNavigator.viroAppProps.showARScene,
								marker:marker // send marker to the markerDetail
							});
						}}
						key={index}>
					</ViroARImageMarker>
				))}
			</ViroARScene>
		);
	}
};

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
