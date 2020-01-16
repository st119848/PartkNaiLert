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

export default class MarkerDetail2 extends Component {
	render() {
		const {marker} = this.props;
		if (marker == 24) {
			var sauce = require("../../../assets/24.jpeg");
		} else if (marker == 31) {
			var sauce = require("../../../assets/31.jpeg");
		} else if (marker == 32) {
			var sauce = require("../../../assets/32.jpeg");
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