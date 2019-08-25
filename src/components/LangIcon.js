import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import thIcon from '../assets/img/language/thailand.png';
import cnIcon from '../assets/img/language/china.png';
import enIcon from '../assets/img/language/en.png';
import jpIcon from '../assets/img/language/japan.png';

const LangIcon = (props) => {
    const {onPress, lang='en'} = props;
    const iconsMap = {
        th: thIcon,
        zh: cnIcon,
        en: enIcon,
        ja: jpIcon
    };
    const icon = iconsMap[lang];
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.image}/>
        </View>
    );
};

export default LangIcon;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        overflow: 'hidden',
        borderRadius: 15,
        width: 30,
        height: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

