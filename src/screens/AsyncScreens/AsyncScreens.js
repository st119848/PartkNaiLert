import React, {Component, Fragment} from 'react';
import ContentDetailModal from "./components/ContentDetailModal";
import ARModal from "../../components/modals/ARModal";

class AsyncScreens extends Component {

    handleCloseBeaconModal = () => {
        const {closeBeaconContentModal} = this.props;
        closeBeaconContentModal()
    };

    handleCloseARModal = () => {
        const {closeARModal} = this.props;
        closeARModal()
    };

    render() {
        const {isShowBeaconContentModal, isShowARModal} = this.props;
        return (
            <Fragment>
                <ContentDetailModal
                    visible={isShowBeaconContentModal}
                    onClose={this.handleCloseBeaconModal}
                />
                <ARModal
                    scene='ARCarDemo'
                    visible={isShowARModal}
                    onClose={this.handleCloseARModal}
                />
            </Fragment>
        )
    }
}

export default AsyncScreens;