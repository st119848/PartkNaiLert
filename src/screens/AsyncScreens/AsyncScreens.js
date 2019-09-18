import React, {Component, Fragment} from 'react';
import ContentDetailModal from "../../components/modals/ContentDetailModal";

class AsyncScreens extends Component {

    handleCloseModal = () => {
        const {closeBeaconContentModal} = this.props;
        closeBeaconContentModal()
    }

    componentDidMount() {
        const {getBeaconContentFromApi} = this.props;
        getBeaconContentFromApi('8eb7972dba9a99c3188da80f6f1de732');
    }

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