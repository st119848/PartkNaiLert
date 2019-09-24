import {settingLanguage} from "../../reducers/actions/setting";
import {
    getHighlightListFromApi,
    getImageSlidersFromApi, setActiveHighlightItem,
} from "../../reducers/actions/contents";
import {
    showARModal
} from "../../reducers/actions/setting";
import {connect} from "react-redux";
import HomeScreen from "./HomeScreen";


const mapDispatchToProps = (dispatch) => {
    return {
        settingLanguage: (lang) => dispatch(settingLanguage(lang)),
        getImageSlidersFromApi: () => dispatch(getImageSlidersFromApi()),
        showARModal: () => dispatch(showARModal()),
        getHighlightListFromApi: () => dispatch(getHighlightListFromApi()),
        setActiveHighlightItem: (itemID) => dispatch(setActiveHighlightItem(itemID)),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
        imagesHighlight: state.contents.imagesHighlight,
        isGettingImageSlider: state.contents.isGettingImageSlider,
        isInBeaconArea: state.beacons.isInBeaconArea
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)