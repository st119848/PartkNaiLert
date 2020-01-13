import ARScreen from './ARScreen'
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ARScreen)