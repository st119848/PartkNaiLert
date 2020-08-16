"use strict";

import React, { Component } from "react";
import PNLARThree39 from "./components/PNLARThree39";
import PNLARThree40 from "./components/PNLARThree40";
import PNLARThree49 from "./components/PNLARThree49";
import MarkerScreen from "./components/MarkerScene";
import { ViroARSceneNavigator } from "@citychallenge/react-viro";
import { Theme, BottomText, Border } from "./style";
import {connect} from "react-redux";
import {translate} from "../../helpers/translates";
import {getMarkerData} from "../../helpers/ar";
import {setActiveMarkerDetail, setActiveMarker} from "../../reducers/actions/ar";

var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

class ScanTheObject4 extends Component{
	t = (key, find, replace) => {
		const {language} = this.props;
		return translate(language, key, find, replace);
	};

	getMarkerInfo(marker) {
		const {languageId} = this.props;
		const arData = getMarkerData(marker, 4) || {};
		const {value: arTranslates=[], preview} = arData;
		const arMarkerDataByLang = arTranslates.find((item) => item.language_id === languageId) || {};
		const title = String(arMarkerDataByLang.title);
		const detail = String(arMarkerDataByLang.detail);
		return {
			title,
			detail,
			preview
		}
	}

	onAnchored(marker) {
		const {setActiveMarkerDetail, navigation, setActiveMarker} = this.props;
		const {title, detail, preview} = this.getMarkerInfo(marker);
		const markerKeys = marker.split('-');
		const [markerKey] = markerKeys;
		setActiveMarker(markerKey);
		setActiveMarkerDetail({title, detail, preview})
		navigation.navigate('ARMarkerDetail');
	}

	render() {
		const {active3DMarker} = this.props;
		const defaultScene = MarkerScreen;
		const mapScene = {
			"39": PNLARThree39,
			"40": PNLARThree40,
			"49": PNLARThree49,
		};
		const scene = mapScene[active3DMarker] || defaultScene;
		const bottomText = active3DMarker ? this.t('ar.camera.hover') : this.t('ar.camera.scan');
		return (
			<Theme>
				<Border>
					<ViroARSceneNavigator
						autofocus
						initialScene={{ scene: scene }}
						apiKey={apiKey}
						viroAppProps={{ onAnchored: (marker) => this.onAnchored(marker)}}
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
		setActiveMarker: (marker) => dispatch(setActiveMarker(marker)),
		setActiveMarkerDetail: (detail) => dispatch(setActiveMarkerDetail(detail)),
	}
};

const mapStateToProps = (state) => {
	return {
		language: state.setting.language,
		languageId: state.setting.languageId,
		active3DMarker: state.ar.active3DMarker,
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(ScanTheObject4)
