import URLS from './../../config/urls'
import {postApiData} from "../../helpers/networking";
import {
    transformBeaconsConfig,
    transformBeaconList
} from "../../adapter/beacon";

export const GETTING_BEACON_CONFIG_START = 'GETTING_BEACON_CONFIG_START';
export const GETTING_BEACON_CONFIG_SUCCESS = 'GETTING_BEACON_CONFIG_SUCCESS';
export const GETTING_BEACON_CONFIG_FAILED = 'GETTING_BEACON_CONFIG_FAILED';
export const GETTING_BEACON_LIST_START = 'GETTING_BEACON_LIST_START';
export const GETTING_BEACON_LIST_SUCCESS = 'GETTING_BEACON_LIST_SUCCESS';
export const GETTING_BEACON_LIST_FAILED = 'GETTING_BEACON_LIST_FAILED';
export const CLOSE_BEACON_CONTENT_MODAL = 'CLOSE_BEACON_CONTENT_MODAL';

export const getBeaconConfig = () => async (dispatch) =>{
    try {
        dispatch({type: GETTING_BEACON_CONFIG_START});
        const url = URLS.beacon.config;
        console.log(url);
        const response = await postApiData(url);
        const {response: beaconsConfig=[]} = response.data;

        const data = transformBeaconsConfig(beaconsConfig);
        dispatch({type: GETTING_BEACON_CONFIG_SUCCESS, data});
        return data;
    } catch (e) {
        console.log(e.message);
        dispatch({type: GETTING_BEACON_CONFIG_FAILED});
        return false;
    }
};

export const getBeaconContentFromApi = (identifier) => async (dispatch, getState) => {
    try {
        dispatch({type: GETTING_BEACON_LIST_START});
        const url = URLS.museumContent.beaconContent;
        const {language} = getState().setting;
        const postData = {
            code: language,
            beacons: {
                [identifier]: {
                    deviceIdentifier: identifier
                }
            }
        };
        const response = await postApiData(url, postData);
        const {response: beaconList=[]} = response.data;
        const beaconListConverted = transformBeaconList(beaconList);
        const [beaconContent] = beaconListConverted;
        const data = {
            beaconList: beaconListConverted,
            beaconContent
        };
        dispatch({type: GETTING_BEACON_LIST_SUCCESS, data});
    } catch (e) {
        dispatch({type: GETTING_BEACON_LIST_FAILED});
    }
};

export const closeBeaconContentModal = () => (dispatch) => {
    dispatch({type: CLOSE_BEACON_CONTENT_MODAL})
};
