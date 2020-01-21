import {getAboutUsIntroFromApi} from "../../reducers/actions/aboutUs";
import {connect} from "react-redux";
import IntroductionScreen from "./IntroductionScreen";


const mapDispatchToProps = (dispatch) => {
    return {
        getAboutUsIntroFromApi: () => dispatch(getAboutUsIntroFromApi()),
    }
};

const mapStateToProps = (state) => {
    return {
        introData: state.aboutUs.introData,
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(IntroductionScreen)