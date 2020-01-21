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
		if (this.props.marker == 1) {
			var sauce = require("../../../assets/1.jpeg");
		} else if (this.props.marker == 2) {
			var sauce = require("../../../assets/2.jpeg");
		} else if (this.props.marker == 3) {
			var sauce = require("../../../assets/3.jpeg");
		} else if (this.props.marker == 4) {
			var sauce = require("../../../assets/4.jpeg");
		} else if (this.props.marker == 5) {
			var sauce = require("../../../assets/5.jpeg");
		} else if (this.props.marker == 6) {
			var sauce = require("../../../assets/6.jpeg");
		} else if (this.props.marker == 7) {
			var sauce = require("../../../assets/7.jpeg");
		} else if (this.props.marker == 8) {
			var sauce = require("../../../assets/8.jpeg");
		} else if (this.props.marker == 9) {
			var sauce = require("../../../assets/9.jpeg");
		} else if (this.props.marker == 10) {
			var sauce = require("../../../assets/10.jpeg");
		} else if (this.props.marker == 11) {
			var sauce = require("../../../assets/11.jpeg");
		} else if (this.props.marker == 12) {
			var sauce = require("../../../assets/12.jpeg");
		} else if (this.props.marker == 13) {
			var sauce = require("../../../assets/13.jpeg");
		} else if (this.props.marker == 14) {
			var sauce = require("../../../assets/14.jpeg");
		} else if (this.props.marker == 15) {
			var sauce = require("../../../assets/15.jpeg");
		} else if (this.props.marker == 16) {
			var sauce = require("../../../assets/16.jpeg");
		} else if (this.props.marker == 17) {
			var sauce = require("../../../assets/17.jpeg");
		} else if (this.props.marker == 18) {
			var sauce = require("../../../assets/18.jpeg");
		} else if (this.props.marker == 19) {
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
