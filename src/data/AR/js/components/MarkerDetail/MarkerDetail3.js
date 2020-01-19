"use strict";

import React, {Component} from "react";
import Header from "../Header/Header";
import {
	Theme,
	ImageBox,
	ImageStyle,
	ThreeDBox,
	ThreeDText,
	TextBox,
	TitleText,
	DetailText,
	Container,
} from "./style";
import { ScrollView } from 'react-native';

export default class MarkerDetail3 extends Component {
	render() {
		const {marker, t} = this.props;
		if (marker == 39) {
			var sauce = require("../../../assets/39.jpeg");
		} else if (marker == 40) {
			var sauce = require("../../../assets/40.jpeg");
		} else if (marker == 41) {
			var sauce = require("../../../assets/41.jpeg");
		} else if (marker == 44) {
			var sauce = require("../../../assets/44.jpeg");
		} else if (marker == 49) {
			var sauce = require("../../../assets/49.jpeg");
		}
		const threeDAvailable = t('ar.detail.threeDAvailable');
		return (
			<Theme>
				<Header />
				<Container>
					<ImageBox>
						<ImageStyle source={sauce} />
					</ImageBox>
					{this.props.renderText === true && typeof item3D != 'undefined' ? // check if  type of item3D not undefined so it has 3D  the bottom lines will show
						<ThreeDBox>
							<Touch onPress={() => {
								Actions.scan3({
									showARScene: 2, //send showARScene with not defaut value    1 is  default

								});
							}}>
								<ThreeDText>{threeDAvailable} ></ThreeDText>
							</Touch>
						</ThreeDBox>
						: null}
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