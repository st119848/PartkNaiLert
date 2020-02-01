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
			var sauce = require("../../../assets/details/35.jpg");
		} else if (this.props.marker == 36) {
			var sauce = require("../../../assets/details/36.jpg");
		} else if (this.props.marker == 37) {
			var sauce = require("../../../assets/details/37.jpg");
		} else if (this.props.marker == 38) {
			var sauce = require("../../../assets/details/38.jpg");
		} else if (this.props.marker == 39) {
			var sauce = require("../../../assets/details/39.jpg");
		} else if (this.props.marker == 40) {
			var sauce = require("../../../assets/details/40.jpg");
		} else if (this.props.marker == 41) {
			var sauce = require("../../../assets/details/41.jpg");
		} else if (this.props.marker == 42) {
			var sauce = require("../../../assets/details/42.jpg");
		} else if (this.props.marker == 43) {
			var sauce = require("../../../assets/details/43.jpg");
		} else if (this.props.marker == 44) {
			var sauce = require("../../../assets/details/44.jpg");
		} else if (this.props.marker == 45) {
			var sauce = require("../../../assets/details/45.jpg");
		} else if (this.props.marker == 46) {
			var sauce = require("../../../assets/details/46.jpg");
		} else if (this.props.marker == 47) {
			var sauce = require("../../../assets/details/47.jpg");
		} else if (this.props.marker == 48) {
			var sauce = require("../../../assets/details/48.jpg");
		} else if (this.props.marker == 49) {
			var sauce = require("../../../assets/details/49.jpg");
		} else if (this.props.marker == 50) {
			var sauce = require("../../../assets/details/50.jpg");
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