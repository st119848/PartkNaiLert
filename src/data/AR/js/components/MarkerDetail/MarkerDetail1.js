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
			var sauce = require("../../../assets/details/1.jpg");
		} else if (this.props.marker == 2) {
			var sauce = require("../../../assets/details/2.jpg");
		} else if (this.props.marker == 3) {
			var sauce = require("../../../assets/details/3.jpg");
		} else if (this.props.marker == 4) {
			var sauce = require("../../../assets/details/4.jpg");
		} else if (this.props.marker == 5) {
			var sauce = require("../../../assets/details/5.jpg");
		} else if (this.props.marker == 6) {
			var sauce = require("../../../assets/details/6.jpg");
		} else if (this.props.marker == 7) {
			var sauce = require("../../../assets/details/7.jpg");
		} else if (this.props.marker == 8) {
			var sauce = require("../../../assets/details/8.jpg");
		} else if (this.props.marker == 9) {
			var sauce = require("../../../assets/details/9.jpg");
		} else if (this.props.marker == 10) {
			var sauce = require("../../../assets/details/10.jpg");
		} else if (this.props.marker == 11) {
			var sauce = require("../../../assets/details/11.jpg");
		} else if (this.props.marker == 12) {
			var sauce = require("../../../assets/details/12.jpg");
		} else if (this.props.marker == 13) {
			var sauce = require("../../../assets/details/13.jpg");
		} else if (this.props.marker == 14) {
			var sauce = require("../../../assets/details/14.jpg");
		} else if (this.props.marker == 15) {
			var sauce = require("../../../assets/details/15.jpg");
		} else if (this.props.marker == 16) {
			var sauce = require("../../../assets/details/16.jpg");
		} else if (this.props.marker == 17) {
			var sauce = require("../../../assets/details/17.jpg");
		} else if (this.props.marker == 18) {
			var sauce = require("../../../assets/details/18.jpg");
		} else if (this.props.marker == 19) {
			var sauce = require("../../../assets/details/19.jpg");
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
