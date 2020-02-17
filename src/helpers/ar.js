import {
    objectZone1,
    objectZone2,
    objectZone3,
    objectZone4,
    objectZone5,
    objectZone6,
    models
} from "../config/ar";

export const getObjectZoneData = (zone) => {
    if (zone === 2) {
        return objectZone2 || [];
    } else if (zone === 3) {
        return objectZone3 || [];
    } else if (zone === 4) {
        return objectZone4 || [];
    } else if (zone === 5) {
        return objectZone5 || [];
    } else if (zone === 6) {
        return objectZone6 || [];
    } else {
        return objectZone1 || [];
    }
};

export const getMarkers = (zone) => {
    const objectDataArr = getObjectZoneData(zone);
    return objectDataArr.reduce((result, objectData) => {
        const {id, markers=[]} = objectData;
        const markersObject = markers.reduce((markerResult, marker, index) => {
            const markerName = `${id}-${index}`;
            return {
                ...markerResult,
                [markerName]: marker,
            }
        }, {});
        return {
            ...result,
            ...markersObject,
        }
    }, {});
};

export const getMarkerByObjectId = (zone, objectId) => {
    const objectDataArr = getObjectZoneData(zone);
    const objectData = objectDataArr.find((object) => {
        return object.id === parseInt(objectId)
    });
    const {id, markers=[]} = objectData;
    return markers.reduce((markerResult, marker, index) => {
        const markerName = `${id}-${index}`;
        return {
            ...markerResult,
            [markerName]: marker,
        }
    }, {});
};

export const getMarkerData = (marker, zone) => {
    const markerKeys = marker.split('-');
    const [markerKey] = markerKeys;
    const objectDataArr = getObjectZoneData(zone);
    return objectDataArr.find((object) => {
        return object.id === parseInt(markerKey)
    })
};

export const getMarkersHasModel = (zone) => {
    return models[zone] || [];
};