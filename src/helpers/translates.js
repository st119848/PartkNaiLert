import {get} from 'lodash';
import TRANSLATES from './../config/translates'

export const translate = (lang='en', key='', find='', replace='') => {
    const translated = get(TRANSLATES, `${lang}.${key}`, '');
    return translated.replace(find, replace);
};