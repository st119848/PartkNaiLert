import React from 'react'
import {
    StyleSheet,
    ImageBackground,
} from 'react-native';
import BG from './../assets/img/bg_main.png'
import LangListSetting from './../components/LangListSetting'
import {settingLanguage} from "../reducers/actions/setting";
import {connect} from "react-redux";

class InitialScreen extends React.Component{
    handleChangeLang = (lang) => {
        const {settingLanguage, navigation} = this.props;
        settingLanguage(lang);
        navigation.navigate('Main')
    };
    render() {
        const {language} = this.props;
        return (
        <ImageBackground source={BG} style={styles.container}>
            <LangListSetting
                activeLang={language}
                onChangeLang={this.handleChangeLang}
            />
        </ImageBackground>
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
export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});