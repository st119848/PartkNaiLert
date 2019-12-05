"use strict";

import React, { Component } from "react";

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

const ObjectScene = createReactClass({
	render: function () {
		return (
			<ViroARScene>
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
					source={require("../../../assets/3D/Jar.obj")}
					resources={[require("../../../assets/3D/Jar.mtl"),
					require("../../../assets/3D/3a.jpg"),
					require("../../../assets/3D/3.jpg"),
					require("../../../assets/3D/4a.jpg")]}
					position={[0.0, 0.0, 0.002]}
					scale={[0.015, 0.015, 0.015]}
					type='OBJ'

				/>
				<ViroQuad
					rotation={[-90, 0, 0]}
					position={[0, -0.001, 0]}
					width={2.5} height={2.5}
					arShadowReceiver={true}
				/>
			</ViroARScene>
		);
	},
});

export default ObjectScene;
