import setting from './setting'
import contents from './contents'
import aboutUs from './aboutUs'
import { combineReducers } from 'redux'

export default combineReducers({
    setting,
    contents,
    aboutUs
})