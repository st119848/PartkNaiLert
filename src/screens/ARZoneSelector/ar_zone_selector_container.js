import {connect} from "react-redux";
import ARZoneSelector from './ARZoneSelector'
import {setActiveZone} from "../../reducers/actions/ar";


const mapDispatchToProps = (dispatch) => {
    return {
        setActiveZone: (zone, screen) => dispatch(setActiveZone(zone, screen)),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
        languageId: state.setting.languageId,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ARZoneSelector);
