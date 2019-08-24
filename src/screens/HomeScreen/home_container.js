import {settingLanguage} from "../../reducers/actions/setting";
import {connect} from "react-redux";
import HomeScreen from "./HomeScreen";


const mapDispatchToProps = (dispatch) => {
    return {
        settingLanguage: (lang) => dispatch(settingLanguage(lang))
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)