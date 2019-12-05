"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ARData from "../../../assets/ARData.json";
import { Actions } from "react-native-router-flux";
import PicTest from "../../../assets/24.jpeg";

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

const PNLAR = createReactClass({
	allMarkers: ["4", "13", "16", "19", "24", "31", "32", "39", "40", "41", "44", "49"],

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
			bdShow: false,
			caShow: false,
			cbShow: false,
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
							source={require("../../../assets/3D/LandPaper.obj")}
							resources={[require("../../../assets/3D/LandPaper.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.dShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Tube.obj")}
							resources={[require("../../../assets/3D/Tube.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.acShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Khong.obj")}
							resources={[require("../../../assets/3D/Khong.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.afShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Picture.obj")}
							resources={[require("../../../assets/3D/Picture.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.aiShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/jar.obj")}
							resources={[require("../../../assets/3D/jar.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, -180]}
							visible={this.state.bdShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Drum.obj")}
							resources={[require("../../../assets/3D/Drum.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, -180]}
							visible={this.state.caShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Tank.obj")}
							resources={[require("../../../assets/3D/Tank.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.cbShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Cabinet1.obj")}
							resources={[require("../../../assets/3D/Cabinet1.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.ciShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Cabinet2.obj")}
							resources={[require("../../../assets/3D/Cabinet2.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.dzShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/TeaPot.obj")}
							resources={[require("../../../assets/3D/TeaPot.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.daShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/SewingMachine.obj")}
							resources={[require("../../../assets/3D/SewingMachine.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
							visible={this.state.ddShow}
						/>

						<Viro3DObject
							source={require("../../../assets/3D/Screen.obj")}
							resources={[require("../../../assets/3D/Screen.mtl")]}
							position={[0, 0, 0.03]}
							scale={[0.15, 0.15, 0.15]}
							type='OBJ'
							rotation={[0, 0, 0]}
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
		alert("3D Working");
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
		if (marker == 24) {
			this.setState({
				bdShow: true
			})
		};
		if (marker == 31) {
			this.setState({
				caShow: true
			})
		};
		if (marker == 32) {
			this.setState({
				cbShow: true
			})
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
	"4": {
		source: require("../../../assets/4.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[3].physicalWidth, // real world width in meters
	},
	"13": {
		source: require("../../../assets/13.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[12].physicalWidth, // real world width in meters
	},
	"16": {
		source: require("../../../assets/16.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[15].physicalWidth, // real world width in meters
	},
	"19": {
		source: require("../../../assets/19.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[18].physicalWidth, // real world width in meters
	},
	"24": {
		source: PicTest,
		orientation: "Left",
		physicalWidth: ARData[23].physicalWidth, // real world width in meters
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
	"44": {
		source: require("../../../assets/44.jpeg"),
		orientation: "Left",
		physicalWidth: ARData[43].physicalWidth, // real world width in meters
	},
	"49": {
		source: require("../../../assets/49.jpeg"),
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

export default PNLAR;
