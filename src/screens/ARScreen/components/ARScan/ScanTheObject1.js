"use strict";

import React, { Component } from "react";
import PNLAR1 from "../Scene/PNLAR1";
import PNLARThree4 from "../Scene/PNLARThree4";
import PNLARThree13 from "../Scene/PNLARThree13";
import PNLARThree16 from "../Scene/PNLARThree16";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import { Actions } from "react-native-router-flux";

var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

export default class ScanTheObject1 extends Component{
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
	}
	render() {
		const {showARScene, t} = this.props;
		const mapScene = {
			"4": PNLARThree4,
		};
		const defaultScene = PNLAR1;
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