"use strict";

import React, { Component } from "react";
import PNLAR3 from "../Scene/PNLAR3";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import PNLARThree24 from "../Scene/PNLARThree24";
import PNLARThree31 from "../Scene/PNLARThree31";
import PNLARThree32 from "../Scene/PNLARThree32";
import {translate} from "../../../../helpers/translates";
import {connect} from "react-redux";
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

class ScanTheObject3 extends Component{
	static getInitialState(marker) {
		const detailState = {
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",

		};
		return {
			...detailState,
		};
	}
	t = (key, find, replace) => {
		const {language} = this.props;
		return translate(language, key, find, replace);
	};
	onAnchored(marker) {
	}
	render() {
		const {showARScene} = this.props;
		const mapScene = {
			"24": PNLARThree24,
			"31": PNLARThree31,
			"32": PNLARThree32,
		};
		const defaultScene = PNLAR3;
		const scene = mapScene[showARScene] || defaultScene;
		const bottomText = (showARScene == '1') ? this.t('ar.camera.scan') : this.t('ar.camera.hover');
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

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

const mapStateToProps = (state) => {
	return {
		language: state.setting.language,
		languageId: state.setting.languageId,
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(ScanTheObject3)
