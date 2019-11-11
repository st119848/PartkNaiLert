import React from 'react'
import {
    View,
    StyleSheet
} from "react-native";
import IconButton from "../IconButton";
import SetPageModal from "../modals/SetPageModal";
import {translate} from "../../helpers/translates";
import {settingLanguage} from "../../reducers/actions/setting";
import {connect} from "react-redux";

class PageSettingButton extends React.Component {
    state = {
        isShowSetPage: false,
    };
    handleHamburgerClick = () => {
        this.setState({
            isShowSetPage: true,
        })
    };
    handleChangePage = (page) => {
        this.handleCloseModal();
        const {navigation} = this.props;
        navigation.navigate(page);
    };
    handleCloseModal = () => {
        this.setState({
            isShowSetPage: false,
        })
    };
    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };
    render() {
        const {isShowSetPage} = this.state;
        return (
            <View style={styles.headerContainer}>
                <HamburgerButton onPress={this.handleHamburgerClick}/>
                <SetPageModal
                    t={this.t}
                    visible={isShowSetPage}
                    onClose={this.handleCloseModal}
                    onChangePage={this.handleChangePage}
                />
            </View>
        )
    }
}

const HamburgerButton = props => {
    const {onPress} = props;
    return (
        <IconButton onPress={onPress} iconName="menu" type="entypo" style={styles.icon} />
    )
};

const styles = StyleSheet.create({
    icon: {
        color: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    }
});

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
export default connect(mapStateToProps, mapDispatchToProps)(PageSettingButton)

