import {postApiData} from './../../helpers/networking'
import URLS from './../../config/urls'
import {
    transformImagesSlider,
    transformHighlightList,
    transformBeaconList
} from '../../adapter/contents'

export const GETTING_IMAGE_SLIDER_START = 'GETTING_IMAGE_SLIDER_START';
export const GETTING_IMAGE_SLIDER_SUCCESS = 'GETTING_IMAGE_SLIDER_SUCCESS';
export const GETTING_IMAGE_SLIDER_FAILED = 'GETTING_IMAGE_SLIDER_FAILED';
export const GETTING_HIGHLIGHT_LIST_START = 'GETTING_HIGHLIGHT_LIST_START';
export const GETTING_HIGHLIGHT_LIST_SUCCESS = 'GETTING_HIGHLIGHT_LIST_SUCCESS';
export const GETTING_HIGHLIGHT_LIST_FAILED = 'GETTING_HIGHLIGHT_LIST_FAILED';
export const SET_ACTIVE_HIGHLIGHT_ITEM = 'SET_ACTIVE_HIGHLIGHT_ITEM';
export const GETTING_BEACON_LIST_START = 'GETTING_BEACON_LIST_START';
export const GETTING_BEACON_LIST_SUCCESS = 'GETTING_BEACON_LIST_SUCCESS';
export const GETTING_BEACON_LIST_FAILED = 'GETTING_BEACON_LIST_FAILED';
export const CLOSE_BEACON_CONTENT_MODAL = 'CLOSE_BEACON_CONTENT_MODAL';

export const getImageSlidersFromApi = () => async (dispatch, getState) => {
    try {
        dispatch({type: GETTING_IMAGE_SLIDER_START});
        const url = URLS.museumContent.imageSlider;
        const {language} = getState().setting;
        const postData = {
            code: language,
        };
        const response = await postApiData(url, postData);
        const {response: imagesHighlight} = response.data;
        const data = transformImagesSlider(imagesHighlight);
        dispatch({type: GETTING_IMAGE_SLIDER_SUCCESS, data});
    } catch (e) {
        console.log(e.message);
        dispatch({type: GETTING_IMAGE_SLIDER_FAILED});
    }
};

export const getHighlightItemFromApi = () => async (dispatch, getState) => {
    try {
        dispatch({type: GETTING_HIGHLIGHT_LIST_START});
        const url = URLS.museumContent.highlightList;
        const {language} = getState().setting;
        const postData = {
            code: language,
        };
        const response = await postApiData(url, postData);
        const {response: highlightList} = response.data;
        const data = transformHighlightList(highlightList);
        dispatch({type: GETTING_HIGHLIGHT_LIST_SUCCESS, data});
    } catch (e) {
        console.log(e.message);
        dispatch({type: GETTING_HIGHLIGHT_LIST_FAILED});
    }
};

export const setActiveHighlightItem = (itemId) => (dispatch, getState) => {
    const {highlightList=[]} = getState().contents;
    const activeHighlightItem = highlightList.find(item => item.id === itemId);
    dispatch({type: SET_ACTIVE_HIGHLIGHT_ITEM, data: activeHighlightItem});
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