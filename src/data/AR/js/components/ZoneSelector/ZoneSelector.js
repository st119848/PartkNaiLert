"use strict";

import React from "react";
import { ViroARScene, ViroText } from "react-viro";
import Header from "../Header/Header";
import {
	Theme,
	ImageBox,
	ImageStyle,
	TextBox,
	TitleText,
	DetailText,
	ThreeDText,
	ThreeDBox,
	Container,
	Touch
} from "./style";
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
import { Testing } from "../PNLAR/PNLARThree";
import ARData from "../../../assets/ARData.json";
import PNLARThree from "../PNLAR/PNLARThree";

var createReactClass = require("create-react-class");

var MarkerDetail = createReactClass({
	render: function () {
		return (
			<Theme>
				<Header source={require("../../../assets/white-cross.png")} />
				<Container>
					{/* <ImageBox>
						<ImageStyle source={sauce} />
					</ImageBox> */}
					<TitleText>โปรดเลือกโซนของพิพิธภัณฑ์</TitleText>
						<ThreeDBox>
							<Touch onPress={() => {
								Actions.scan1({
									showARScene: 1, //send showARScene with not defaut value    1 is  default 

								});
							}}>
								<ThreeDText>เรือนท่านผู้หญิง ></ThreeDText>
							</Touch>
						</ThreeDBox>
						<ThreeDBox>
							<Touch onPress={() => {
								Actions.scan2({
									showARScene: 1, //send showARScene with not defaut value    1 is  default 

								});
							}}>
								<ThreeDText>เรือนท่านเจ้าคุณ ></ThreeDText>
							</Touch>
						</ThreeDBox>
					{/* <ScrollView>
						<TextBox>
							<TitleText>{this.props.textLangTitle}</TitleText>
							<DetailText>
								{this.props.textLangDetail}
							</DetailText>
						</TextBox>
					</ScrollView> */}
				</Container>
			</Theme>
		);
	},

});

export default MarkerDetail;
