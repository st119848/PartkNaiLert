import ARScreen from './ARScreen'
import {connect} from "react-redux";

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
export default connect(mapStateToProps, mapDispatchToProps)(ARScreen)