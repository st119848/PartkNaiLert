import {connect} from "react-redux";
import ParkNaiLertScreen from "./ParkNaiLertScreen";
import {showARModal} from "../../reducers/actions/setting";


const mapDispatchToProps = (dispatch) => {
    return {
        showARModal: () => dispatch(showARModal()),
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ParkNaiLertScreen)