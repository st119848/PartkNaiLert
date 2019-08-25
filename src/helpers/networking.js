import axios from 'axios';

export const getApiData = (url, params={}) => {
    return axios.get(url, {
        params
    });
};

export const postApiData = (url, post={}) => {
    return axios.post(url, post);
};