import {getAboutUsContactFromApi} from "../../reducers/actions/aboutUs";
import {connect} from "react-redux";
import ContactUsScreens from "./ContactUsScreens";

const mapDispatchToProps = (dispatch) => {
    return {
        getAboutUsContactFromApi: () => dispatch(getAboutUsContactFromApi()),
    }
};

const mapStateToProps = (state) => {
    return {
        contactData: state.aboutUs.contactData,
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsScreens)