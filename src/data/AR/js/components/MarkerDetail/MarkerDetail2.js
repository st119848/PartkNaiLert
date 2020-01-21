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
import { Testing } from "../PNLAR/PNLARThree1";
import ARData from "../../../assets/ARData.json";
import PNLARThree from "../PNLAR/PNLARThree1";

var createReactClass = require("create-react-class");

var MarkerDetail2 = createReactClass({
	render: function () {
		// if (this.props.marker == 24) {
		// 	var icon=require("../../../assets/24.jpeg"));
		// }

		if (this.props.marker == 20) {
			var sauce = require("../../../assets/20.jpeg");
		} else if (this.props.marker == 21) {
			var sauce = require("../../../assets/21.jpeg");
		} else if (this.props.marker == 22) {
			var sauce = require("../../../assets/22.jpeg");
		} else if (this.props.marker == 23) {
			var sauce = require("../../../assets/23.jpeg");
		} else if (this.props.marker == 24) {
			var sauce = require("../../../assets/24.jpeg");
		} else if (this.props.marker == 25) {
			var sauce = require("../../../assets/25.jpeg");
		} else if (this.props.marker == 26) {
			var sauce = require("../../../assets/26.jpeg");
		} else if (this.props.marker == 27) {
			var sauce = require("../../../assets/27.jpeg");
		} else if (this.props.marker == 28) {
			var sauce = require("../../../assets/28.jpeg");
		} else if (this.props.marker == 29) {
			var sauce = require("../../../assets/29.jpeg");
		} else if (this.props.marker == 30) {
			var sauce = require("../../../assets/30.jpeg");
		} else if (this.props.marker == 31) {
			var sauce = require("../../../assets/31.jpeg");
		} else if (this.props.marker == 32) {
			var sauce = require("../../../assets/32.jpeg");
		} else if (this.props.marker == 33) {
			var sauce = require("../../../assets/33.jpeg");
		} else if (this.props.marker == 34) {
			var sauce = require("../../../assets/34.jpeg");
		}
		const has3D = [24, 31, 32] // Number of picture that has 3D
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

export default MarkerDetail2;
