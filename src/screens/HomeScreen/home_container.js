import {settingLanguage} from "../../reducers/actions/setting";
import {getImageSlidersFromApi} from "../../reducers/actions/contents";
import {connect} from "react-redux";
import HomeScreen from "./HomeScreen";


const mapDispatchToProps = (dispatch) => {
    return {
        settingLanguage: (lang) => dispatch(settingLanguage(lang)),
        getImageSlidersFromApi: () => dispatch(getImageSlidersFromApi())
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
        imagesHighlight: state.contents.imagesHighlight
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)