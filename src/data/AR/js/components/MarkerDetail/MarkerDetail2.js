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

export default class MarkerDetail2 extends Component {
	render() {
		const {marker, renderText} = this.props;
		let source;
		if (marker === "20") {
			source = require("../../../assets/20.jpg");
		} else if (marker === "21") {
			source = require("../../../assets/21.jpg");
		} else if (marker === "2") {
			source = require("../../../assets/22.jpg");
		} else if (marker === "23") {
			source = require("../../../assets/23.jpg");
		} else if (marker === "24") {
			source = require("../../../assets/24.jpg");
		} else if (marker === "25") {
			source = require("../../../assets/25.jpg");
		} else if (marker === "26") {
			source = require("../../../assets/26.jpg");
		} else if (marker === "27") {
			source = require("../../../assets/27.jpg");
		} else if (marker === "28") {
			source = require("../../../assets/28.jpg");
		} else if (marker === "29") {
			source = require("../../../assets/29.jpg");
		} else if (marker === "30") {
			source = require("../../../assets/30.jpg");
		} else if (marker === "31") {
			source = require("../../../assets/31.jpg");
		} else if (marker === "32") {
			source = require("../../../assets/32.jpg");
		} else if (marker === "33") {
			source = require("../../../assets/33.jpg");
		} else if (marker === "34") {
			source = require("../../../assets/34.jpg");
		}

		const has3D = ["24", "31", "32"]; // Number of picture that has 3D
		const isShowModel = has3D.includes(marker); // the marker from PNLAR  has in list of has3D if it exists it return id otherwise return undefined
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
								Actions.scan1({
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