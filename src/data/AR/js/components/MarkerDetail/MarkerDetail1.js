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

var MarkerDetail1 = createReactClass({
	render: function () {
		// if (this.props.marker == 24) {
		// 	var icon=require("../../../assets/24.jpeg"));
		// }

		if (this.props.marker == 1) {
			var sauce = require("../../../assets/1.jpeg");
		} else if (this.props.marker == 2) {
			var sauce = require("../../../assets/2.jpeg");
		} else if (this.props.marker == 3) {
			var sauce = require("../../../assets/3.jpeg");
		} else if (this.props.marker == 4) {
			var sauce = require("../../../assets/4.jpeg");
		} else if (this.props.marker == 5) {
			var sauce = require("../../../assets/5.jpeg");
		} else if (this.props.marker == 6) {
			var sauce = require("../../../assets/6.jpeg");
		} else if (this.props.marker == 7) {
			var sauce = require("../../../assets/7.jpeg");
		} else if (this.props.marker == 8) {
			var sauce = require("../../../assets/8.jpeg");
		} else if (this.props.marker == 9) {
			var sauce = require("../../../assets/9.jpeg");
		} else if (this.props.marker == 10) {
			var sauce = require("../../../assets/10.jpeg");
		} else if (this.props.marker == 11) {
			var sauce = require("../../../assets/11.jpeg");
		} else if (this.props.marker == 12) {
			var sauce = require("../../../assets/12.jpeg");
		} else if (this.props.marker == 13) {
			var sauce = require("../../../assets/13.jpeg");
		} else if (this.props.marker == 14) {
			var sauce = require("../../../assets/14.jpeg");
		} else if (this.props.marker == 15) {
			var sauce = require("../../../assets/15.jpeg");
		} else if (this.props.marker == 16) {
			var sauce = require("../../../assets/16.jpeg");
		} else if (this.props.marker == 17) {
			var sauce = require("../../../assets/17.jpeg");
		} else if (this.props.marker == 18) {
			var sauce = require("../../../assets/18.jpeg");
		} else if (this.props.marker == 19) {
			var sauce = require("../../../assets/19.jpeg");
		}
		const has3D = [4, 13, 16, 19] // Number of picture that has 3D
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
								Actions.scan1({
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

export default MarkerDetail1;
