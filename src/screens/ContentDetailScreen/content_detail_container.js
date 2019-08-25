import {connect} from "react-redux";
import ContentDetailScreen from "./ContentDetailScreen";

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        activeHighlightItem: state.contents.activeHighlightItem,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentDetailScreen)