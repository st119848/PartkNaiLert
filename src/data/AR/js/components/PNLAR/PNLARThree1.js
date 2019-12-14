"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import Pic4 from "../../../assets/4.jpeg";
import Pic13 from "../../../assets/13.jpeg";
import Pic16 from "../../../assets/16.jpeg";
import Pic19 from "../../../assets/19.jpeg";

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

const PNLARThree1 = createReactClass({
	allMarkers: ["4", "13", "16", "19"],

	getInitialState(marker) {
		const baseState = {
			texture: "white",
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
			marker: "test",
			playAnim: false,
			animateObject: true,
			isShow: false,
			dShow: false,
			acShow: false,
			afShow: false,
			aiShow: false,
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
							source={require("../../../assets/3D/LandPaper.obj")}
							resources={[require("../../../assets/3D/LandPaperm.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='OBJ'
							rotation={[0, 0, -90]}
							visible={this.state.dShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Tube.obj")}
							resources={[require("../../../assets/3D/Tubem.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='OBJ'
							rotation={[0, 0, -90]}
							visible={this.state.acShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Khong.obj")}
							resources={[require("../../../assets/3D/Khongm.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='OBJ'
							rotation={[0, 0, -90]}
							visible={this.state.afShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Picture.obj")}
							resources={[require("../../../assets/3D/Picturem.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.015, 0.015, 0.015]}
							type='OBJ'
							rotation={[0, 0, -90]}
							visible={this.state.aiShow}
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
		if (marker == 4) {
			this.setState({
				dShow: true
			})
		};
		if (marker == 13) {
			this.setState({
				acShow: true
			})
		};
		if (marker == 16) {
			this.setState({
				afShow: true
			})
		};
		if (marker == 19) {
			this.setState({
				aiShow: true
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
	"4": {
		source: Pic4,
		orientation: "Left",
		physicalWidth: ARData[3].physicalWidth, // real world width in meters
	},
	"13": {
		source: Pic13,
		orientation: "Left",
		physicalWidth: ARData[12].physicalWidth, // real world width in meters
	},
	"16": {
		source: Pic16,
		orientation: "Left",
		physicalWidth: ARData[15].physicalWidth, // real world width in meters
	},
	"19": {
		source: Pic19,
		orientation: "Left",
		physicalWidth: ARData[18].physicalWidth, // real world width in meters
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

export default PNLARThree1;
