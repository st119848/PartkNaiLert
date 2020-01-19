"use strict";

import React, {Component} from "react";
import Header from "../Header/Header";
import {
	Theme,
	ImageBox,
	ImageStyle,
	TextBox,
	TitleText,
	ThreeDBox,
	ThreeDText,
	DetailText,
	Container,
} from "./style";
import { ScrollView } from 'react-native';

export default class MarkerDetail2 extends Component {
	render() {
		const {marker, t} = this.props;
		if (marker == 24) {
			var sauce = require("../../../assets/24.jpeg");
		} else if (marker == 31) {
			var sauce = require("../../../assets/31.jpeg");
		} else if (marker == 32) {
			var sauce = require("../../../assets/32.jpeg");
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
								Actions.scan2({
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