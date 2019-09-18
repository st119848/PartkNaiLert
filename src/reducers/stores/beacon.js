import {
    GETTING_BEACON_CONFIG_START,
    GETTING_BEACON_CONFIG_SUCCESS,
    GETTING_BEACON_CONFIG_FAILED
} from "../actions/beacon";

const initialStste = {
    beaconsConfig: [],
    isGettingBeaconConfig: false,
    isGettingBeaconConfigSuccess: false,
};

export default (state = initialStste, action) => {
    switch (action.type) {
        case GETTING_BEACON_CONFIG_START:
            return {
                ...state,
                isGettingBeaconConfig: true,
            };
        case GETTING_BEACON_CONFIG_SUCCESS:
            return {
                ...state,
                beaconsConfig: action.data,
                isGettingBeaconConfig: false,
                isGettingBeaconConfigSuccess: true,
            };
        case GETTING_BEACON_CONFIG_FAILED:
            return {
                ...state,
                isGettingBeaconConfig: false,
                isGettingBeaconConfigSuccess: false,
            };
        default:
            return state
    }

}