import {connect} from "react-redux";
import ParkNaiLertScreen from "./ParkNaiLertScreen";


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ParkNaiLertScreen)