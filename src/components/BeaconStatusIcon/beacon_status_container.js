import {connect} from "react-redux";
import BeaconStatusIcon from './BeaconStatusIcon'


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        isInBeaconArea: state.beacons.isInBeaconArea
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(BeaconStatusIcon)