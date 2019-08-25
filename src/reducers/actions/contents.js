import {postApiData} from './../../helpers/networking'
import URLS from './../../config/urls'
import {getImagesSlider} from '../../getters/contents'

export const GETTING_IMAGE_SLIDER_START = 'GETTING_IMAGE_SLIDER_START';
export const GETTING_IMAGE_SLIDER_SUCCESS = 'GETTING_IMAGE_SLIDER_SUCCESS';
export const GETTING_IMAGE_SLIDER_FAILED = 'GETTING_IMAGE_SLIDER_FAILED';

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
        console.log('imagesHighlight', imagesHighlight)
        const data = getImagesSlider(imagesHighlight);
        dispatch({type: GETTING_IMAGE_SLIDER_SUCCESS, data});
    } catch (e) {
        console.log(e.message);
        dispatch({type: GETTING_IMAGE_SLIDER_FAILED});
    }
};