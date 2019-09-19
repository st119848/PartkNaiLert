import {
    getBeaconContentFromApi,
    closeBeaconContentModal
} from "../../reducers/actions/beacons";
import {closeARModal} from "../../reducers/actions/setting";
import {connect} from "react-redux";
import AsyncScreens from "./AsyncScreens";


const mapDispatchToProps = (dispatch) => {
    return {
        getBeaconContentFromApi: (identifier) => dispatch(getBeaconContentFromApi(identifier)),
        closeBeaconContentModal: () => dispatch(closeBeaconContentModal()),
        closeARModal: () => dispatch(closeARModal()),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
        isShowBeaconContentModal: state.beacons.isShowBeaconContentModal,
        isShowARModal: state.setting.isShowARModal,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AsyncScreens)