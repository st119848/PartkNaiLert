import {getAboutUsFindFromApi} from "../../reducers/actions/aboutUs";
import {connect} from "react-redux";
import FindUsScreen from "./FindUsScreen";

const mapDispatchToProps = (dispatch) => {
    return {
        getAboutUsFindFromApi: () => dispatch(getAboutUsFindFromApi()),
    }
};

const mapStateToProps = (state) => {
    return {
        findData: state.aboutUs.findData,
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(FindUsScreen)