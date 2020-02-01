"use strict";

import React, { Component } from "react";
import PNLAR2 from "../PNLAR/PNLAR2";
import PNLARThree24 from "../PNLAR/PNLARThree24";
import PNLARThree31 from "../PNLAR/PNLARThree31";
import PNLARThree32 from "../PNLAR/PNLARThree32";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import PNLAR1 from "../PNLAR/PNLAR1";
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

export default class ScanTheObjectTwo extends Component{
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
		const defaultScene = PNLAR2;
		const scene = mapScene[showARScene] || defaultScene;
		const bottomText = (showARScene == '1') ? t('ar.camera.scan') : t('ar.camera.hover');
		console.log('render', showARScene);
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
