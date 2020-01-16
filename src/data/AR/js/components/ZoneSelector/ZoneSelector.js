"use strict";

import React, {Component} from "react";
import Header from "../Header/Header";
import {
	Theme,
	TitleText,
	ThreeDText,
	ThreeDBox,
	Container,
	Touch
} from "./style";
import { Actions } from 'react-native-router-flux';

export default class ZoneSelector extends Component {
	handlerClickZone1 = () => {
		Actions.scan1({
			showARScene: 1, //send showARScene with not defaut value    1 is  default
		});
	};
	handlerClickZone2 = () => {
		Actions.scan2({
			showARScene: 1, //send showARScene with not defaut value    1 is  default

		});
	};
	handlerClickZone3 = () => {
		Actions.scan3({
			showARScene: 1, //send showARScene with not defaut value    1 is  default

		});
	};
	render() {
		const {t} = this.props;
		const title = t('ar.zone.title');
		const zone1 = t('ar.zone.zone1');
		const zone2 = t('ar.zone.zone2');
		const zone3 = t('ar.zone.zone3');
		return (
			<Theme>
				<Container>
					<TitleText>{title}</TitleText>
					<ThreeDBox>
						<Touch onPress={this.handlerClickZone1}>
							<ThreeDText>{zone1} ></ThreeDText>
						</Touch>
					</ThreeDBox>
					<ThreeDBox>
						<Touch onPress={this.handlerClickZone2}>
							<ThreeDText>{zone2} ></ThreeDText>
						</Touch>
					</ThreeDBox>
					<ThreeDBox>
						<Touch onPress={this.handlerClickZone3}>
							<ThreeDText>{zone3} ></ThreeDText>
						</Touch>
					</ThreeDBox>
				</Container>
			</Theme>
		);
	}
}
