import {get} from 'lodash';
import TRANSLATES from './../config/translates'

export const translate = (lang='us', key='', find='', replace='') => {
    const translated = get(TRANSLATES, `${lang}.${key}`, '');
    return translated.replace(find, replace);
};