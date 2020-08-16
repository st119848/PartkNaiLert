import {connect} from "react-redux";
import ARMarkerDetail from './ARMarkerDetail'
import {setActive3DMarker} from "../../reducers/actions/ar";


const mapDispatchToProps = (dispatch) => {
    return {
        setActive3DMarker: (marker) => dispatch(setActive3DMarker(marker))
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
        languageId: state.setting.languageId,
        activeMarkerDetail: state.ar.activeMarkerDetail,
        activeZone: state.ar.activeZone,
        activeZoneScreen: state.ar.activeZoneScreen,
        activeMarker: state.ar.activeMarker,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ARMarkerDetail);
