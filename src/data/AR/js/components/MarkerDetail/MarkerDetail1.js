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

export default class MarkerDetail1 extends Component {
	render() {
		const {marker} = this.props;
		if (marker == 4) {
			var sauce = require("../../../assets/4.jpeg");
		} else if (marker == 13) {
			var sauce = require("../../../assets/13.jpeg");
		} else if (marker == 16) {
			var sauce = require("../../../assets/16.jpeg");
		} else if (marker == 19) {
			var sauce = require("../../../assets/19.jpeg");
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
