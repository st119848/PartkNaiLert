"use strict";

import React, { Component } from "react";

import {
	ViroARScene,
	ViroMaterials,
	ViroAnimations,
	Viro3DObject,
	ViroARImageMarker,
	ViroARTrackingTargets,
	ViroSpotLight,
	ViroQuad,
	ViroAmbientLight,
} from "react-viro";
import {getMarkerByObjectId} from "../../../../helpers/ar";

class PNLARThree41 extends Component {
	constructor(props) {
		super(props);
		const markers = getMarkerByObjectId(6, 41);
		ViroARTrackingTargets.createTargets({
			"41-0": {
				source: require('../../../../assets/img/stickers/41.jpg'),
				orientation: markers['41-0'].orientation,
				physicalWidth: markers['41-0'].physicalWidth, // real world width in meters
			},
		});
		this.state = {
			animateObject: true,
			isShow: false,
			dShow: false,
			markers,
		};
	}

	render() {
		const {markers} = this.state;
		return (
			<ViroARScene>
				{Object.keys(markers).map((marker, index) => (
					<ViroARImageMarker
						target={marker}
						key={index}
						onAnchorFound={() => {
							this.props.sceneNavigator.viroAppProps.onAnchored('41');
							this._onAnchorFound();
						}}
						pauseUpdates={this.state.pauseUpdates}>
						<ViroAmbientLight color='#ffffff' />
						<ViroSpotLight
							innerAngle={5}
							outerAngle={25}
							direction={[0, -1, 0]}
							position={[0, 5, 1]}
							color="#ffffff"
							castsShadow={true}
							shadowMapSize={2048}
							shadowNearZ={2}
							shadowFarZ={7}
							shadowOpacity={.7}
						/>
						{this.state.dShow &&
						<Viro3DObject
							source={require("../../../../assets/3D/tea_pot.glb")}
							position={[0, 0, 0.03]}
							scale={[0.3, 0.3, 0.3]}
							type='GLB'
							rotation={[0, 0, -90]}
							visible={this.state.dShow}
						/>
						}
						<ViroQuad
							rotation={[-90, 0, 0]}
							position={[0, -0.001, 0]}
							width={2.5} height={2.5}
							arShadowReceiver={true}
						/>
					</ViroARImageMarker>
				))}
			</ViroARScene>
		);
	}
	_onAnchorFound() {
		if(!this.state.isShow) {
			this.setState({
				isShow: true,
				dShow: true
			})
		}
	}
};

ViroMaterials.createMaterials({
	white: {
		shininess: 2.0,
		lightingModel: "PBR",
	},
});

ViroAnimations.registerAnimations({
	scaleUp: {
		properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
		duration: 500,
		easing: "bounce",
	},
	scaleDown: {
		properties: { scaleX: 0, scaleY: 0, scaleZ: 0 },
		duration: 200,
	},
	scaleObject: {
		properties: { scaleX: 0.002, scaleY: 0.002, scaleZ: 0.002 },
		duration: 5000,
		easing: "bounce",
	},
	scaleSphereUp: {
		properties: { scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8 },
		duration: 50,
		easing: "easeineaseout",
	},
	scaleSphereDown: {
		properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
		duration: 50,
		easing: "easeineaseout",
	},
	tapAnimation: [["scaleSphereUp", "scaleSphereDown"]],
});

export default PNLARThree41;