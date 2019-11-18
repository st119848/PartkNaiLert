import AsyncStorage from '@react-native-community/async-storage';
import {
  getImageSlidersFromApi,
  getHighlightListFromApi,
  setActiveHighlightItem
} from './contents'

export const SETTING_LANGUAGE_START = 'SETTING_LANGUAGE_START';
export const SETTING_LANGUAGE_SUCCESS = 'SETTING_LANGUAGE_SUCCESS';
export const SET_SHOW_AR_MODAL = 'SET_SHOW_AR_MODAL';
export const SET_HIDE_AR_MODAL = 'SET_HIDE_AR_MODAL';

export const settingLanguage = language => async (dispatch, getState)=>{
  const {activeHighlightId} = getState().contents;
  AsyncStorage.setItem('selectedLanguage', language);
  await dispatch({type: SETTING_LANGUAGE_START, language});
  await dispatch(getImageSlidersFromApi());
  await dispatch(getHighlightListFromApi());
  await dispatch(setActiveHighlightItem(activeHighlightId));
  dispatch({type: SETTING_LANGUAGE_SUCCESS});
};

export const showARModal = () => (dispatch) => {
  dispatch({type: SET_SHOW_AR_MODAL});
};

export const closeARModal = () => (dispatch) => {
  dispatch({type: SET_HIDE_AR_MODAL});
};
