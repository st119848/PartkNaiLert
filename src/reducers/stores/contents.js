import {
    GETTING_IMAGE_SLIDER_START,
    GETTING_IMAGE_SLIDER_SUCCESS,
    GETTING_IMAGE_SLIDER_FAILED
} from "../actions/contents";

const initialStste = {
    imagesHighlight : [],
    isGettingImageSlider: false,
    isGettingImageSliderSuccess: false,
};

export default (state = initialStste, action) => {
    switch (action.type) {
        case GETTING_IMAGE_SLIDER_START:
            return {
                ...state,
                isGettingImageSlider: true,
                isGettingImageSliderSuccess: false,
            };

        case GETTING_IMAGE_SLIDER_SUCCESS:
            return {
                ...state,
                isGettingImageSlider: false,
                isGettingImageSliderSuccess: true,
                imagesHighlight: action.data,
            };

        case GETTING_IMAGE_SLIDER_FAILED:
            return {
                ...state,
                isGettingImageSlider: false,
                isGettingImageSliderSuccess: false,
            };

        default:
            return state
    }

}