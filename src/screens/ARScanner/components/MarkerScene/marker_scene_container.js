import {connect} from "react-redux";
import MarkerScene from './MarkerScene'

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const mapStateToProps = (state) => {
    return {
        languageId: state.setting.languageId,
        activeZone: state.ar.activeZone,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MarkerScene)
