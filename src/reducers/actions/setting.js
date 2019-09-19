  import AsyncStorage from '@react-native-community/async-storage';

export const SETTING_LANGUAGE = 'SETTING_LANGUAGE';
export const SET_SHOW_AR_MODAL = 'SET_SHOW_AR_MODAL';
export const SET_HIDE_AR_MODAL = 'SET_HIDE_AR_MODAL';

export const settingLanguage = language => async (dispatch)=>{
  AsyncStorage.setItem('selectedLanguage', language);
  dispatch({type: SETTING_LANGUAGE, language})
};

export const showARModal = () => (dispatch) => {
  dispatch({type: SET_SHOW_AR_MODAL});
};

export const closeARModal = () => (dispatch) => {
  dispatch({type: SET_HIDE_AR_MODAL});
};
