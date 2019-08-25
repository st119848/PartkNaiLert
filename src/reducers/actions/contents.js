import {postApiData} from './../../helpers/networking'
import URLS from './../../config/urls'
import {transformImagesSlider, transformHighlightList} from '../../adapter/contents'

export const GETTING_IMAGE_SLIDER_START = 'GETTING_IMAGE_SLIDER_START';
export const GETTING_IMAGE_SLIDER_SUCCESS = 'GETTING_IMAGE_SLIDER_SUCCESS';
export const GETTING_IMAGE_SLIDER_FAILED = 'GETTING_IMAGE_SLIDER_FAILED';
export const GETTING_HIGHLIGHT_LIST_START = 'GETTING_HIGHLIGHT_LIST_START';
export const GETTING_HIGHLIGHT_LIST_SUCCESS = 'GETTING_HIGHLIGHT_LIST_SUCCESS';
export const GETTING_HIGHLIGHT_LIST_FAILED = 'GETTING_HIGHLIGHT_LIST_FAILED';

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
}