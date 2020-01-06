import React from 'react';
import LangButton from "../LangButton";
import {View} from "react-native";
import SetLanguageModal from "../modals/SetLanguageModal";
import {settingLanguage} from "../../reducers/actions/setting";
import {connect} from "react-redux";
import {getHighlightListFromApi, getImageSlidersFromApi, setActiveHighlightItem} from "../../reducers/actions/contents";
import {getAboutUsIntroFromApi, getAboutUsFindFromApi, getAboutUsContactFromApi} from "../../reducers/actions/aboutUs";

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
        const {settingLanguage, routeName, activeHighlightId} = this.props;
        const {
            getImageSlidersFromApi,
            getHighlightListFromApi,
            setActiveHighlightItem,
            getAboutUsIntroFromApi,
            getAboutUsFindFromApi,
            getAboutUsContactFromApi
        } = this.props;
        this.handleCloseModal();
        const handlerOnChangeLangSuccess = async () => {
            console.log(routeName)
            switch (routeName) {
                case 'Home':
                    getImageSlidersFromApi();
                    break;
                case 'List':
                    getHighlightListFromApi();
                    break;
                case 'Detail':
                    await getHighlightListFromApi();
                    setActiveHighlightItem(activeHighlightId);
                    break;
                case 'Intro':
                    getAboutUsIntroFromApi();
                    break;
                case 'Find':
                    getAboutUsFindFromApi();
                    break;
                case 'Contact':
                    getAboutUsContactFromApi();
                    break;
            }
        };
        settingLanguage(lang, handlerOnChangeLangSuccess);
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
        settingLanguage: (lang, onSuccess) => dispatch(settingLanguage(lang, onSuccess)),
        getImageSlidersFromApi: () => dispatch(getImageSlidersFromApi()),
        getHighlightListFromApi: () => dispatch(getHighlightListFromApi()),
        setActiveHighlightItem: (activeHighlightId) => dispatch(setActiveHighlightItem(activeHighlightId)),
        getAboutUsIntroFromApi: () => dispatch(getAboutUsIntroFromApi()),
        getAboutUsContactFromApi: () => dispatch(getAboutUsContactFromApi()),
        getAboutUsFindFromApi: () => dispatch(getAboutUsFindFromApi()),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
        activeHighlightId: state.contents.activeHighlightId,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LangSettingButton)