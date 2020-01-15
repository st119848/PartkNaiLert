"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import Pic39 from "../../../assets/39.jpeg";
import Pic40 from "../../../assets/40.jpeg";
import Pic41 from "../../../assets/41.jpeg";
import Pic44 from "../../../assets/44.jpeg";
import Pic49 from "../../../assets/49.jpeg";

import {
	ViroARScene,
	ViroMaterials,
	ViroNode,
	ViroAnimations,
	ViroImage,
	Viro3DObject,
	ViroLightingEnvironment,
	ViroARImageMarker,
	ViroARTrackingTargets,
	ViroBox,
	ViroSphere,
	ViroSpotLight,
	ViroQuad,
	ViroText,
	ViroConstants,
	ViroFlexView,
	ViroARSceneNavigator,
	ViroAmbientLight,
} from "react-viro";

const createReactClass = require("create-react-class");

export const Testing = "Hi world";

const PNLARThree3 = createReactClass({
	allMarkers: ["39", "40", "41", "44", "49"],

	getInitialState(marker) {
		const baseState = {
			texture: "white",
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
			marker: "test",
			playAnim: false,
			animateObject: true,
			isShow: false,
			ciShow: false,
			doShow: false,
			daShow: false,
			ddShow: false,
			diShow: false,
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
							// to navigate to detail component
							// Actions.detail({
							// 	checkThreeDim: marker, 
							// 	renderText: true, 
							// 	textLangTitle:String(ARData[marker - 1].value[0].title), 
							// 	textLangDetail:String(ARData[marker - 1].value[0].detail)
							// });
							this._onAnchorFound(marker);
						}
						}
						key={index}
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

						<Viro3DObject
							source={require("../../../assets/3D/Cabinet1.glb")}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='GLB'
							rotation={[0, 0, -90]}
							visible={this.state.ciShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Cabinet2.glb")}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='GLB'
							rotation={[0, 0, -90]}
							visible={this.state.doShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/TeaPot.glb")}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='GLB'
							rotation={[0, 0, -90]}
							visible={this.state.daShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/SewingMachine.glb")}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='GLB'
							rotation={[0, 0, -90]}
							visible={this.state.ddShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Screen.glb")}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='GLB'
							rotation={[0, 0, -90]}
							visible={this.state.diShow}
						/>

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
		if (marker == 39) {
			this.setState({
				ciShow: true
			})
		};
		if (marker == 40) {
			this.setState({
				doShow: true
			})
		};
		if (marker == 41) {
			this.setState({
				daShow: true
			})
		};
		if (marker == 44) {
			this.setState({
				ddShow: true
			})
		};
		if (marker == 49) {
			this.setState({
				diShow: true
			})
		};
	},
	_toggleButtons() {
		this.setState({
			animName: this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp",
			playAnim: true,
		});
	},
});

ViroMaterials.createMaterials({
	white: {
		shininess: 2.0,
		lightingModel: "PBR",
	},
});

ViroARTrackingTargets.createTargets({
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
	"44": {
		source: Pic44,
		orientation: "Left",
		physicalWidth: ARData[43].physicalWidth, // real world width in meters
	},
	"49": {
		source: Pic49,
		orientation: "Left",
		physicalWidth: ARData[48].physicalWidth, // real world width in meters
	}
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

export default PNLARThree3;
