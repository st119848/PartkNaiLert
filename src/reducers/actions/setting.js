import AsyncStorage from '@react-native-community/async-storage';

export const SETTING_LANGUAGE_START = 'SETTING_LANGUAGE_START';
export const SETTING_LANGUAGE_SUCCESS = 'SETTING_LANGUAGE_SUCCESS';
export const SET_SHOW_AR_MODAL = 'SET_SHOW_AR_MODAL';
export const SET_HIDE_AR_MODAL = 'SET_HIDE_AR_MODAL';

export const settingLanguage = (language, onSuccess) => async (dispatch)=>{
  AsyncStorage.setItem('selectedLanguage', language);
  await dispatch({type: SETTING_LANGUAGE_START, language});
  dispatch({type: SETTING_LANGUAGE_SUCCESS});
  onSuccess && onSuccess();
};

export const showARModal = () => (dispatch) => {
  dispatch({type: SET_SHOW_AR_MODAL});
};

export const closeARModal = () => (dispatch) => {
  dispatch({type: SET_HIDE_AR_MODAL});
};
