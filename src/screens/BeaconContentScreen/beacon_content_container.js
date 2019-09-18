import {connect} from "react-redux";
import BeaconContentScreen from "./BeaconContentScreen";

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        beaconContent: state.beacons.beaconContent,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(BeaconContentScreen)