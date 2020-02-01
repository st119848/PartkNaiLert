"use strict";

import React, { Component } from "react";
import PNLAR3 from "../PNLAR/PNLAR3";
import PNLARThree39 from "../PNLAR/PNLARThree39";
import PNLARThree40 from "../PNLAR/PNLARThree40";
import PNLARThree41 from "../PNLAR/PNLARThree41";
import PNLARThree44 from "../PNLAR/PNLARThree44";
import PNLARThree49 from "../PNLAR/PNLARThree49";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import PNLAR2 from "../PNLAR/PNLAR2";
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

export default class ScanTheObjectThree extends Component{
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
			"39": PNLARThree39,
			"40": PNLARThree40,
			"41": PNLARThree41,
			"44": PNLARThree44,
			"49": PNLARThree49,
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