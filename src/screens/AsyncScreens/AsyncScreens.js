import React, {Component, Fragment} from 'react';
import ContentDetailModal from "../../components/modals/ContentDetailModal";

class AsyncScreens extends Component {

    handleCloseModal = () => {
        const {closeBeaconContentModal} = this.props;
        closeBeaconContentModal()
    };

    render() {
        const {isShowBeaconContentModal} = this.props;
        return (
            <Fragment>
                <ContentDetailModal
                    visible={isShowBeaconContentModal}
                    onClose={this.handleCloseModal}
                />
            </Fragment>
        )
    }
}

export default AsyncScreens;