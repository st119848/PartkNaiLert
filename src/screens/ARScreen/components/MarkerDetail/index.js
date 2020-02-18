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
	ThreeDBox,
	Touch,
	ThreeDText
} from "./style";
import { ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";
import {getMarkersHasModel} from "../../../../helpers/ar";

export default class Index extends Component {
	handlerBackSuccess = () => {
		Actions.pop({
			showARScene: 1,
		})
	};

	render() {
		const {marker, renderText, t, preview, textLangTitle, textLangDetail, zone} = this.props;
		const has3D = getMarkersHasModel(zone); // Number of picture that has 3D
		const isShowModel = has3D.includes(marker); // the marker from PNLAR  has in list of has3D if it exists it return id otherwise return undefined
		const threeDTitle = t('ar.detail.threeDAvailable');
		return (
			<Theme>
				<Header onBack={this.handlerBackSuccess} />
				<Container>
					<ImageBox>
						<ImageStyle source={preview} />
					</ImageBox>
					{renderText === true && isShowModel ? // check if  type of item3D not undefined so it has 3D  the bottom lines will show
						<ThreeDBox>
							<Touch onPress={() => {
								if (zone === 1) {
									Actions.scan1({
										showARScene: marker, //send showARScene with not defaut value    1 is  default

									});
								} else if (zone === 2) {
									Actions.scan2({
										showARScene: marker, //send showARScene with not defaut value    1 is  default

									});
								} else if (zone === 3) {
									Actions.scan3({
										showARScene: marker, //send showARScene with not defaut value    1 is  default

									});
								} else if (zone === 4) {
									Actions.scan4({
										showARScene: marker, //send showARScene with not defaut value    1 is  default

									});
								} else if (zone === 5) {
									Actions.scan5({
										showARScene: marker, //send showARScene with not defaut value    1 is  default

									});
								} else if (zone === 6) {
									Actions.scan6({
										showARScene: marker, //send showARScene with not defaut value    1 is  default

									});
								}

							}}>
								<ThreeDText>{threeDTitle} ></ThreeDText>
							</Touch>
						</ThreeDBox>
						: null}{/* if undefined it does not show the button */}
					<ScrollView>
						<TextBox>
							<TitleText>{textLangTitle}</TitleText>
							<DetailText>
								{textLangDetail}
							</DetailText>
						</TextBox>
					</ScrollView>
				</Container>
			</Theme>
		);
	}
}
