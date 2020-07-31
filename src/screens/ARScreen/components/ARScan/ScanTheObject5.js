"use strict";

import React, { Component } from "react";
import PNLAR5 from "../Scene/PNLAR5";
import { ViroARSceneNavigator } from "@citychallenge/react-viro";
import Header from "../Header/Header";
import { Theme, BottomText, Border } from "./style";
import {connect} from "react-redux";
import {translate} from "../../../../helpers/translates";
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

class ScanTheObject5 extends Component{
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
		const mapScene = {};
		const defaultScene = PNLAR5;
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
export default connect(mapStateToProps, mapDispatchToProps)(ScanTheObject5)
