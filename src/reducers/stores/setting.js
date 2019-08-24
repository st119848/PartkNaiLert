import { SETTING_LANGUAGE, 
  SETTING_BEACONACTIVE, 
  SETTING_BEACONINFO 
} from "../actions/setting";

const initialStste = {
language : "th",
beaconActive: false,
beaconInfo: [],
};

export default (state = initialStste, action) => {
  switch (action.type) {
    case SETTING_LANGUAGE:
      return {
          ...state,
          language: action.language
      }
    
    case SETTING_BEACONACTIVE:
      return {
          ...state,
          beaconActive: action.beaconActive
      }
    
    case SETTING_BEACONINFO:
      return {
          ...state,
          beaconInfo: action.beaconInfo
      }
    
    default:
      return state
  }

}
