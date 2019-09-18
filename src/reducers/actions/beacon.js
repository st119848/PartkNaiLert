import URLS from './../../config/urls'
import {postApiData} from "../../helpers/networking";
import {transformBeaconsConfig} from "../../adapter/beacon";

export const GETTING_BEACON_CONFIG_START = 'GETTING_BEACON_CONFIG_START';
export const GETTING_BEACON_CONFIG_SUCCESS = 'GETTING_BEACON_CONFIG_SUCCESS';
export const GETTING_BEACON_CONFIG_FAILED = 'GETTING_BEACON_CONFIG_FAILED';

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
