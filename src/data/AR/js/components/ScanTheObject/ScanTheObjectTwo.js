"use strict";

import React, { Component } from "react";
import PNLAR2 from "../PNLAR/PNLAR2";
import PNLARThree2 from "../PNLAR/PNLARThree2";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import { Actions } from "react-native-router-flux";
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
		const {showARScene} = this.props;
		const scene = (showARScene === 1) ? PNLAR2 : PNLARThree2;
		const bottomText = (showARScene === 1) ? 'Scan The Object' : 'Hover over the Object';
		return (
			<Theme>
				<Border>
					<Header/>
					<ViroARSceneNavigator
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
