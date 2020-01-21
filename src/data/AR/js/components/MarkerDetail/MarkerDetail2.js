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
			var sauce = require("../../../assets/20.jpeg");
		} else if (this.props.marker == 21) {
			var sauce = require("../../../assets/21.jpeg");
		} else if (this.props.marker == 22) {
			var sauce = require("../../../assets/22.jpeg");
		} else if (this.props.marker == 23) {
			var sauce = require("../../../assets/23.jpeg");
		} else if (this.props.marker == 24) {
			var sauce = require("../../../assets/24.jpeg");
		} else if (this.props.marker == 25) {
			var sauce = require("../../../assets/25.jpeg");
		} else if (this.props.marker == 26) {
			var sauce = require("../../../assets/26.jpeg");
		} else if (this.props.marker == 27) {
			var sauce = require("../../../assets/27.jpeg");
		} else if (this.props.marker == 28) {
			var sauce = require("../../../assets/28.jpeg");
		} else if (this.props.marker == 29) {
			var sauce = require("../../../assets/29.jpeg");
		} else if (this.props.marker == 30) {
			var sauce = require("../../../assets/30.jpeg");
		} else if (this.props.marker == 31) {
			var sauce = require("../../../assets/31.jpeg");
		} else if (this.props.marker == 32) {
			var sauce = require("../../../assets/32.jpeg");
		} else if (this.props.marker == 33) {
			var sauce = require("../../../assets/33.jpeg");
		} else if (this.props.marker == 34) {
			var sauce = require("../../../assets/34.jpeg");
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