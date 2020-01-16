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
} from "./style";
import { ScrollView } from 'react-native';

export default class MarkerDetail3 extends Component {
	render() {
		const {marker} = this.props;
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
		return (
			<Theme>
				<Header />
				<Container>
					<ImageBox>
						<ImageStyle source={sauce} />
					</ImageBox>
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