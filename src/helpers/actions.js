import {Alert} from 'react-native';
import {translate} from './translates';

export const retryAlert = (language, onRetry) => {
    const t = (key, find, replace) => {
        return translate(language, key, find, replace);
    };
    const retryAlertTitle = t('retry.title');
    const retryAlertDescription = t('retry.description');
    const retryAlertButtonLabel = t('retry.btnLabel');
    Alert.alert(
        retryAlertTitle,
        retryAlertDescription,
        [
            {
                text: retryAlertButtonLabel,
                onPress: () => {
                    onRetry && onRetry();
                }
            },
        ],
        {cancelable: false},
    );
};