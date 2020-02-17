"use strict";

import React, {Component} from "react";
import {
	Theme,
	TitleText,
	ThreeDText,
	ThreeDBox,
	Container,
	Touch
} from "./style";
import { Actions } from 'react-native-router-flux';
import {
	ScrollView,
} from 'react-native';

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
	handlerClickZone4 = () => {
		Actions.scan4({
			showARScene: 1, //send showARScene with not defaut value    1 is  default

		});
	};
	handlerClickZone5 = () => {
		Actions.scan5({
			showARScene: 1, //send showARScene with not defaut value    1 is  default

		});
	};
	handlerClickZone6 = () => {
		Actions.scan6({
			showARScene: 1, //send showARScene with not defaut value    1 is  default

		});
	};
	render() {
		const {t} = this.props;
		const title = t('ar.zone.title');
		const zone1 = t('ar.zone.zone1');
		const zone2 = t('ar.zone.zone2');
		const zone3 = t('ar.zone.zone3');
		const zone4 = t('ar.zone.zone4');
		const zone5 = t('ar.zone.zone5');
		const zone6 = t('ar.zone.zone6');
		return (
			<Theme>
				<ScrollView>
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
						<ThreeDBox>
							<Touch onPress={this.handlerClickZone4}>
								<ThreeDText>{zone4} ></ThreeDText>
							</Touch>
						</ThreeDBox>
						<ThreeDBox>
							<Touch onPress={this.handlerClickZone5}>
								<ThreeDText>{zone5} ></ThreeDText>
							</Touch>
						</ThreeDBox>
						<ThreeDBox>
							<Touch onPress={this.handlerClickZone6}>
								<ThreeDText>{zone6} ></ThreeDText>
							</Touch>
						</ThreeDBox>
					</Container>
				</ScrollView>

			</Theme>
		);
	}
}
