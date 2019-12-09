"use strict";

import React from "react";
import { ViroARScene, ViroText } from "react-viro";
import Header from "../Header/Header";
import {
	Theme,
	ImageBox,
	ImageStyle,
	TextBox,
	TitleText,
	DetailText,
	ThreeDText,
	ThreeDBox,
	Container,
	Touch
} from "./style";
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
import { Testing } from "../PNLAR/PNLARThree";
import ARData from "../../../assets/ARData.json";
import PNLARThree from "../PNLAR/PNLARThree";

var createReactClass = require("create-react-class");

var MarkerDetail = createReactClass({
	render: function () {
		// if (this.props.marker == 24) {
		// 	var icon=require("../../../assets/24.jpeg"));
		// }

		if (this.props.marker == 4) {
			var sauce = require("../../../assets/4.jpeg");
		} else if (this.props.marker == 13) {
			var sauce = require("../../../assets/13.jpeg");
		} else if (this.props.marker == 16) {
			var sauce = require("../../../assets/16.jpeg");
		} else if (this.props.marker == 19) {
			var sauce = require("../../../assets/19.jpeg");
		} else if (this.props.marker == 24) {
			var sauce = require("../../../assets/24.jpeg");
		} else if (this.props.marker == 31) {
			var sauce = require("../../../assets/31.jpeg");
		} else if (this.props.marker == 32) {
			var sauce = require("../../../assets/32.jpeg");
		} else if (this.props.marker == 39) {
			var sauce = require("../../../assets/39.jpeg");
		} else if (this.props.marker == 40) {
			var sauce = require("../../../assets/40.jpeg");
		} else if (this.props.marker == 41) {
			var sauce = require("../../../assets/41.jpeg");
		} else if (this.props.marker == 44) {
			var sauce = require("../../../assets/44.jpeg");
		} else if (this.props.marker == 49) {
			var sauce = require("../../../assets/49.jpeg");
		}
		const has3D = [4, 13, 16, 19, 24, 31, 32, 39, 40, 41, 44, 49] // Number of picture that has 3D
		let item3D = has3D.find(D => this.props.marker == D) // the marker from PNLAR  has in list of has3D if it exists it return id otherwise return undefined

		return (
			<Theme>
				<Header source={require("../../../assets/white-cross.png")} />
				<Container>
					<ImageBox>
						<ImageStyle source={sauce} />
					</ImageBox>
					{this.props.renderText === true && typeof item3D != 'undefined' ? // check if  type of item3D not undefined so it has 3D  the bottom lines will show
						<ThreeDBox>
							<Touch onPress={() => {
								Actions.scan2({
									showARScene: 2, //send showARScene with not defaut value    1 is  default 

								});
							}}>
								<ThreeDText>3D Available ></ThreeDText>
							</Touch>
						</ThreeDBox>
						: null}{/* if undefined it does not show the button */}
					<ScrollView>
						<TextBox>
							<TitleText>{this.props.textLangTitle}</TitleText>
							<DetailText>
								{this.props.textLangDetail}
							</DetailText>
						</TextBox>
					</ScrollView>
				</Container>
			</Theme>
		);
	},

});

export default MarkerDetail;
