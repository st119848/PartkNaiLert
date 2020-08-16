import setting from './setting'
import contents from './contents'
import aboutUs from './aboutUs'
import beacons from './beacons'
import ar from './ar'
import { combineReducers } from 'redux'

export default combineReducers({
    setting,
    contents,
    aboutUs,
    beacons,
    ar,
})