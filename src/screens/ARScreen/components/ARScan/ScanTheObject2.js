"use strict";

import React, { Component } from "react";
import PNLAR2 from "../Scene/PNLAR2";
import PNLARThree24 from "../Scene/PNLARThree24";
import PNLARThree31 from "../Scene/PNLARThree31";
import PNLARThree32 from "../Scene/PNLARThree32";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import PNLARThree13 from "../Scene/PNLARThree13";
import PNLARThree16 from "../Scene/PNLARThree16";
import PNLARThree19 from "../Scene/PNLARThree19";
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

export default class ScanTheObject2 extends Component{
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
			"13": PNLARThree13,
			"16": PNLARThree16,
			"19": PNLARThree19,
		};
		const defaultScene = PNLAR2;
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
