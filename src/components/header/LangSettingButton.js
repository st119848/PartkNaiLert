import React from 'react';
import LangButton from "../LangButton";
import {View} from "react-native";
import SetLanguageModal from "../modals/SetLanguageModal";
import {settingLanguage} from "../../reducers/actions/setting";
import {connect} from "react-redux";

class LangSettingButton extends React.Component{
    state = {
        isShowSetLang: false,
    };
    handleLangButtonClick = () => {
        this.setState({
            isShowSetLang: true,
        })

    };
    handleChangeLang = (lang) => {
        const {settingLanguage} = this.props;
        settingLanguage(lang);
        this.handleCloseModal();
    };
    handleCloseModal = () => {
        this.setState({
            isShowSetLang: false,
        })
    };
    render() {
        const {language} = this.props;
        const {isShowSetLang} = this.state;
        return (
            <View>
                <LangButton lang={language} onPress={this.handleLangButtonClick} />
                <SetLanguageModal
                    visible={isShowSetLang}
                    activeLang={language}
                    onClose={this.handleCloseModal}
                    onChangeLang={this.handleChangeLang}
                />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settingLanguage: (lang) => dispatch(settingLanguage(lang)),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LangSettingButton)