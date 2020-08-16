import {
    SET_ACTIVE_3D_MARKER,
    SET_ACTIVE_ZONE,
    SET_ACTIVE_MARKER,
    SET_ACTIVE_MARKER_DETAIL, SET_ACTIVE_ZONE_SCREEN,
} from "../actions/ar";

const initialState = {
    activeZone: undefined,
    activeZoneScreen: undefined,
    activeMarker: undefined,
    active3DMarker: undefined,
    activeMarkerDetail: undefined,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_MARKER:
            return {
                ...state,
                activeMarker: action.data,
            };
        case SET_ACTIVE_3D_MARKER:
            return {
                ...state,
                active3DMarker: action.data,
            };
        case SET_ACTIVE_MARKER_DETAIL:
            return {
                ...state,
                activeMarkerDetail: action.data,
            };
        case SET_ACTIVE_ZONE:
            return {
                ...state,
                activeZone: action.data,
            };
        case SET_ACTIVE_ZONE_SCREEN:
            return {
                ...state,
                activeZoneScreen: action.data,
            };
        default:
            return state
    }

}
