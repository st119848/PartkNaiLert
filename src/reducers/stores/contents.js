import {
    GETTING_IMAGE_SLIDER_START,
    GETTING_IMAGE_SLIDER_SUCCESS,
    GETTING_IMAGE_SLIDER_FAILED,
    GETTING_HIGHLIGHT_LIST_START,
    GETTING_HIGHLIGHT_LIST_SUCCESS,
    GETTING_HIGHLIGHT_LIST_FAILED,
    SET_ACTIVE_HIGHLIGHT_ITEM,
    GETTING_HIGHLIGHT_ITEM_START,
    GETTING_HIGHLIGHT_ITEM_SUCCESS,
    GETTING_HIGHLIGHT_ITEM_FAILED,
} from "../actions/contents";

const initialStste = {
    imagesHighlight : [],
    isGettingImageSlider: false,
    isGettingImageSliderSuccess: false,
    highlightList: [],
    isGettingHighlightList: false,
    isGettingHighlightListSuccess: false,
    activeHighlightId: undefined,
    activeHighlightItem: undefined,
    isGettingHighlightItem: false,
    isGettingHighlightItemSuccess: false,
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
        case GETTING_HIGHLIGHT_LIST_START:
            return {
                ...state,
                isGettingHighlightList: true,
                isGettingHighlightListSuccess: false,
            };

        case GETTING_HIGHLIGHT_LIST_SUCCESS:
            return {
                ...state,
                isGettingHighlightList: false,
                isGettingHighlightListSuccess: true,
                highlightList: action.data,
            };

        case GETTING_HIGHLIGHT_LIST_FAILED:
            return {
                ...state,
                isGettingHighlightList: false,
                isGettingHighlightListSuccess: false,
            };
        case SET_ACTIVE_HIGHLIGHT_ITEM: {
            return {
                ...state,
                activeHighlightId: action.data.id,
                activeHighlightItem: action.data.item,
            }
        }
        case GETTING_HIGHLIGHT_ITEM_START:
            return {
                ...state,
                isGettingHighlightItem: true,
                isGettingHighlightItemSuccess: false,
            };

        case GETTING_HIGHLIGHT_ITEM_SUCCESS:
            return {
                ...state,
                isGettingHighlightItem: false,
                isGettingHighlightItemSuccess: true,
                activeHighlightItem: action.data,
            };

        case GETTING_HIGHLIGHT_ITEM_FAILED:
            return {
                ...state,
                isGettingHighlightItem: false,
                isGettingHighlightItemSuccess: false,
            };
        default:
            return state
    }

}