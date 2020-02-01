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
		if (this.props.marker == 20) {
			var sauce = require("../../../assets/details/20.jpg");
		} else if (this.props.marker == 21) {
			var sauce = require("../../../assets/details/21.jpg");
		} else if (this.props.marker == 22) {
			var sauce = require("../../../assets/details/22.jpg");
		} else if (this.props.marker == 23) {
			var sauce = require("../../../assets/details/23.jpg");
		} else if (this.props.marker == 24) {
			var sauce = require("../../../assets/details/24.jpg");
		} else if (this.props.marker == 25) {
			var sauce = require("../../../assets/details/25.jpg");
		} else if (this.props.marker == 26) {
			var sauce = require("../../../assets/details/26.jpg");
		} else if (this.props.marker == 27) {
			var sauce = require("../../../assets/details/27.jpg");
		} else if (this.props.marker == 28) {
			var sauce = require("../../../assets/details/28.jpg");
		} else if (this.props.marker == 29) {
			var sauce = require("../../../assets/details/29.jpg");
		} else if (this.props.marker == 30) {
			var sauce = require("../../../assets/details/30.jpg");
		} else if (this.props.marker == 31) {
			var sauce = require("../../../assets/details/31.jpg");
		} else if (this.props.marker == 32) {
			var sauce = require("../../../assets/details/32.jpg");
		} else if (this.props.marker == 33) {
			var sauce = require("../../../assets/details/33.jpg");
		} else if (this.props.marker == 34) {
			var sauce = require("../../../assets/details/34.jpg");
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