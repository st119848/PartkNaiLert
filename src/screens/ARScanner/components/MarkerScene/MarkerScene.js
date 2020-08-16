import React, { Component } from "react";
import {getMarkers} from "../../../../helpers/ar";

import {
	ViroARScene,
	ViroARImageMarker,
	ViroARTrackingTargets,
} from "@citychallenge/react-viro";

class MarkerScene extends Component{
	constructor(props) {
		super(props);
		const {activeZone} = props;
		const markers = getMarkers(activeZone);
		ViroARTrackingTargets.createTargets(markers);
		this.state = {
			markers: markers,
		}
	}

	componentWillUnmount() {
		const {markers={}} = this.state;
		Object.keys(markers).forEach((markerKey) => {
			ViroARTrackingTargets.deleteTarget(markerKey)
		})
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
						}}
						key={index}>
					</ViroARImageMarker>
				))}
			</ViroARScene>
		);
	}
};

export default MarkerScene;

