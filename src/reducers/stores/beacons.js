import {
    GETTING_BEACON_CONFIG_START,
    GETTING_BEACON_CONFIG_SUCCESS,
    GETTING_BEACON_CONFIG_FAILED,
    CLOSE_BEACON_CONTENT_MODAL,
    GETTING_BEACON_LIST_FAILED,
    GETTING_BEACON_LIST_START,
    GETTING_BEACON_LIST_SUCCESS,
    SET_ENTER_BEACON_ZONE,
    SET_EXIT_BEACON_ZONE
} from "../actions/beacons";

const initialStste = {
    beaconsConfig: [],
    isGettingBeaconConfig: false,
    isGettingBeaconConfigSuccess: false,
    beaconList: [],
    beaconContent: undefined,
    isShowBeaconContentModal: false,
    isGettingBeaconList: false,
    isGettingBeaconListSuccess: false,
    isInBeaconArea: false,
    activeZone: undefined,
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
        case GETTING_BEACON_LIST_START:
            return {
                ...state,
                isGettingBeaconList: true,
                isGettingBeaconListSuccess: false,
            };

        case GETTING_BEACON_LIST_SUCCESS:
            return {
                ...state,
                beaconList: action.data.beaconList,
                beaconContent: action.data.beaconContent,
                isGettingBeaconList: false,
                isGettingBeaconListSuccess: true,
                isShowBeaconContentModal: true
            };

        case GETTING_BEACON_LIST_FAILED:
            return {
                ...state,
                isGettingBeaconList: false,
                isGettingBeaconListSuccess: false,
            };
        case CLOSE_BEACON_CONTENT_MODAL: {
            return {
                ...state,
                isShowBeaconContentModal: false,
            }
        }
        case SET_ENTER_BEACON_ZONE: {
            return  {
                ...state,
                isInBeaconArea: true,
                activeZone: action.data,
            }
        }
        case SET_EXIT_BEACON_ZONE: {
            return  {
                ...state,
                isInBeaconArea: false,
                activeZone: undefined,
            }
        }
        default:
            return state
    }

}