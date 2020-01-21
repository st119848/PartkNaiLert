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
		if (this.props.marker == 35) {
			var sauce = require("../../../assets/35.jpeg");
		} else if (this.props.marker == 36) {
			var sauce = require("../../../assets/36.jpeg");
		} else if (this.props.marker == 37) {
			var sauce = require("../../../assets/37.jpeg");
		} else if (this.props.marker == 38) {
			var sauce = require("../../../assets/38.jpeg");
		} else if (this.props.marker == 39) {
			var sauce = require("../../../assets/39.jpeg");
		} else if (this.props.marker == 40) {
			var sauce = require("../../../assets/40.jpeg");
		} else if (this.props.marker == 41) {
			var sauce = require("../../../assets/41.jpeg");
		} else if (this.props.marker == 42) {
			var sauce = require("../../../assets/42.jpeg");
		} else if (this.props.marker == 43) {
			var sauce = require("../../../assets/43.jpeg");
		} else if (this.props.marker == 44) {
			var sauce = require("../../../assets/44.jpeg");
		} else if (this.props.marker == 45) {
			var sauce = require("../../../assets/45.jpeg");
		} else if (this.props.marker == 46) {
			var sauce = require("../../../assets/46.jpeg");
		} else if (this.props.marker == 47) {
			var sauce = require("../../../assets/47.jpeg");
		} else if (this.props.marker == 48) {
			var sauce = require("../../../assets/48.jpeg");
		} else if (this.props.marker == 49) {
			var sauce = require("../../../assets/49.jpeg");
		} else if (this.props.marker == 50) {
			var sauce = require("../../../assets/50.jpeg");
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