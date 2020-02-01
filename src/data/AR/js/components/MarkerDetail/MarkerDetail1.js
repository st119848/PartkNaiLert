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
	Container,
	ThreeDBox,
	Touch,
	ThreeDText
} from "./style";
import { ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class MarkerDetail1 extends Component {
	handlerBackSuccess = () => {
		Actions.pop({
			showARScene: 1,
		})
	};

	render() {
		const {marker, renderText, t} = this.props;
		let source;
		if (marker === "1") {
			source = require("../../../assets/1.jpg");
		} else if (marker === "2") {
			source = require("../../../assets/2.jpg");
		} else if (marker === "3") {
			source = require("../../../assets/3.jpg");
		} else if (marker === "4") {
			source = require("../../../assets/4.jpg");
		} else if (marker === "5") {
			source = require("../../../assets/5.jpg");
		} else if (marker === "6") {
			source = require("../../../assets/6.jpg");
		} else if (marker === "7") {
			source = require("../../../assets/7.jpg");
		} else if (marker === "8") {
			source = require("../../../assets/8.jpg");
		} else if (marker === "9") {
			source = require("../../../assets/9.jpg");
		} else if (marker === "10") {
			source = require("../../../assets/10.jpg");
		} else if (marker === "11") {
			source = require("../../../assets/11.jpg");
		} else if (marker === "12") {
			source = require("../../../assets/12.jpg");
		} else if (marker === "13") {
			source = require("../../../assets/13.jpg");
		} else if (marker === "14") {
			source = require("../../../assets/14.jpg");
		} else if (marker === "15") {
			source = require("../../../assets/15.jpg");
		} else if (marker === "16") {
			source = require("../../../assets/16.jpg");
		} else if (marker === "17") {
			source = require("../../../assets/17.jpg");
		} else if (marker === "18") {
			source = require("../../../assets/18.jpg");
		} else if (marker === "19") {
			source = require("../../../assets/19.jpg");
		}
		const has3D = ["4", "13", "16"] // Number of picture that has 3D
		const isShowModel = has3D.includes(marker); // the marker from PNLAR  has in list of has3D if it exists it return id otherwise return undefined
		const threeDTitle = t('ar.detail.threeDAvailable');
		return (
			<Theme>
				<Header onBack={this.handlerBackSuccess} />
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
								<ThreeDText>{threeDTitle} ></ThreeDText>
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
