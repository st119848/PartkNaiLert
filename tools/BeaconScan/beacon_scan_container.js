import BeaconScan from './BeaconScan'
import {
    getBeaconConfig,
    getBeaconContentFromApi,
    setEnterBeaconZone,
    setExitBeaconZone,
} from "../../src/reducers/actions/beacons";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        getBeaconConfig: () => dispatch(getBeaconConfig()),
        getBeaconContentFromApi: (deviceIdentifier) => dispatch(getBeaconContentFromApi(deviceIdentifier)),
        setEnterBeaconZone: (zoneName) => dispatch(setEnterBeaconZone(zoneName)),
        setExitBeaconZone: () => dispatch(setExitBeaconZone()),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BeaconScan)