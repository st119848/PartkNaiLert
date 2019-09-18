import setting from './setting'
import contents from './contents'
import aboutUs from './aboutUs'
import beacon from './beacon'
import { combineReducers } from 'redux'

export default combineReducers({
    setting,
    contents,
    aboutUs,
    beacon,
})