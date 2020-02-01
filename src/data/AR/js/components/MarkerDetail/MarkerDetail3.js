"use strict";

import React, {Component} from "react";
import Header from "../Header/Header";
import {
	Theme,
	ImageBox,
	ImageStyle,
	TextBox,
	TitleText,
	DetailText,
	Container, ThreeDBox, Touch, ThreeDText,
} from "./style";
import { ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class MarkerDetail3 extends Component {
	render() {
		const {marker, renderText} = this.props;
		let source;
		if (marker === "35") {
			source = require("../../../assets/35.jpg");
		} else if (marker === "36") {
			source = require("../../../assets/36.jpg");
		} else if (marker === "37") {
			source = require("../../../assets/37.jpg");
		} else if (marker === "38") {
			source = require("../../../assets/38.jpg");
		} else if (marker === "39") {
			source = require("../../../assets/39.jpg");
		} else if (marker === "40") {
			source = require("../../../assets/40.jpg");
		} else if (marker === "41") {
			source = require("../../../assets/41.jpg");
		} else if (marker === "42") {
			source = require("../../../assets/42.jpg");
		} else if (marker === "43") {
			source = require("../../../assets/43.jpg");
		} else if (marker === "44") {
			source = require("../../../assets/44.jpg");
		} else if (marker === "45") {
			source = require("../../../assets/45.jpg");
		} else if (marker === "46") {
			source = require("../../../assets/46.jpg");
		} else if (marker === "47") {
			source = require("../../../assets/47.jpg");
		} else if (marker === "48") {
			source = require("../../../assets/48.jpg");
		} else if (marker === "49") {
			source = require("../../../assets/49.jpg");
		} else if (marker === "50") {
			source = require("../../../assets/50.jpg");
		}
		const has3D = ["39", "40", "41", "44", "49"] // Number of picture that has 3D
		const isShowModel = has3D.includes(marker);// the marker from PNLAR  has in list of has3D if it exists it return id otherwise return undefined
		return (
			<Theme>
				<Header />
				<Container>
					<ImageBox>
						<ImageStyle source={source} />
					</ImageBox>
					{renderText === true && isShowModel ? // check if  type of item3D not undefined so it has 3D  the bottom lines will show
						<ThreeDBox>
							<Touch onPress={() => {
								Actions.scan3({
									showARScene: marker, //send showARScene with not defaut value    1 is  default

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
	}
}