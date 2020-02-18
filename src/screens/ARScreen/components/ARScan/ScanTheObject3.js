"use strict";

import React, { Component } from "react";
import PNLAR3 from "../Scene/PNLAR3";
import PNLARThree39 from "../Scene/PNLARThree39";
import PNLARThree40 from "../Scene/PNLARThree40";
import PNLARThree41 from "../Scene/PNLARThree41";
import PNLARThree45 from "../Scene/PNLARThree45";
import PNLARThree49 from "../Scene/PNLARThree49";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import PNLARThree24 from "../Scene/PNLARThree24";
import PNLARThree31 from "../Scene/PNLARThree31";
import PNLARThree32 from "../Scene/PNLARThree32";
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

export default class ScanTheObject3 extends Component{
	static getInitialState(marker) {
		const detailState = {
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",

		};
		return {
			...detailState,
		};
	}
	onAnchored(marker) {
		// Actions.detail({textLangTitleTest: String(ARData[marker - 1].value[0].title)});
		// Actions.detail({textLangDetailTest: String(ARData[marker - 1].value[0].title)});
		// this.setState({
		// 	textLangTitle: String(ARData[marker - 1].value[0].title),
		// 	textLangDetail: String(ARData[marker - 1].value[0].detail),
		// 	tapJp: true,
		// });
	}
	render() {
		const {showARScene, t} = this.props;
		const mapScene = {
			"24": PNLARThree24,
			"31": PNLARThree31,
			"32": PNLARThree32,
		};
		const defaultScene = PNLAR3;
		const scene = mapScene[showARScene] || defaultScene;
		const bottomText = (showARScene == '1') ? t('ar.camera.scan') : t('ar.camera.hover');
		return (
			<Theme>
				<Border>
					<Header/>
					<ViroARSceneNavigator
						autofocus
						initialScene={{ scene: scene }} // go to PNLAR
						apiKey={apiKey}
						viroAppProps={{ onAnchored: this.onAnchored ,showARScene: this.props.showARScene}}
					/>
					<BottomText>
						{bottomText}
					</BottomText>
				</Border>
			</Theme>
		)
	}
}