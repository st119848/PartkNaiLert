import {
    getBeaconContentFromApi,
    closeBeaconContentModal
} from "../../reducers/actions/contents";
import {connect} from "react-redux";
import AsyncScreens from "./AsyncScreens";


const mapDispatchToProps = (dispatch) => {
    return {
        getBeaconContentFromApi: (identifier) => dispatch(getBeaconContentFromApi(identifier)),
        closeBeaconContentModal: () => dispatch(closeBeaconContentModal()),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
        isShowBeaconContentModal: state.contents.isShowBeaconContentModal,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AsyncScreens)