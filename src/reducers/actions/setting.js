export const SETTING_LANGUAGE = 'SETTING_LANGUAGE';
export const SETTING_BEACONACTIVE = 'SETTING_BEACONACTIVE';
export const SETTING_BEACONINFO = 'SETTING_BEACONINFO';

export const settingLanguage = language => async (dispatch)=>{
  dispatch({
    type: SETTING_LANGUAGE,
    language
  })
};

export const settingBeaconActive = beaconActive => async (dispatch)=>{
  dispatch({
    type: SETTING_BEACONACTIVE,
    beaconActive
  })
};

export const settingBeaconInfo = beaconInfo => async (dispatch)=>{
  dispatch({
    type: SETTING_BEACONINFO,
    beaconInfo
  })
};
