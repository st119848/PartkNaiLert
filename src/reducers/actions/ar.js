export const SET_ACTIVE_ZONE = 'AR_SET_ACTIVE_ZONE';
export const SET_ACTIVE_ZONE_SCREEN = 'SET_ACTIVE_ZONE_SCREEN';
export const SET_ACTIVE_MARKER = 'AR_SET_ACTIVE_MARKER';
export const SET_ACTIVE_3D_MARKER = 'AR_SET_ACTIVE_3D_MARKER';
export const SET_ACTIVE_MARKER_DETAIL = 'AR_SET_ACTIVE_MARKER_DETAIL';



export const setActiveZone = (zone, screen) => (dispatch)=>{
    dispatch({type: SET_ACTIVE_ZONE, data: zone})
    dispatch({type: SET_ACTIVE_ZONE_SCREEN, data: screen})
    dispatch(setActiveMarker(undefined))
    dispatch(setActive3DMarker(undefined))
    dispatch(setActiveMarkerDetail(undefined))
};

export const setActiveMarker = (marker) => (dispatch)=>{
    dispatch({type: SET_ACTIVE_MARKER, data: marker})
};

export const setActive3DMarker = (marker) => (dispatch)=>{
    dispatch({type: SET_ACTIVE_3D_MARKER, data: marker})
};

export const setActiveMarkerDetail = (detail) => (dispatch)=>{
    dispatch({type: SET_ACTIVE_MARKER_DETAIL, data: detail})
};