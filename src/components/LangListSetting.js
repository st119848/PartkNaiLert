import React from 'react'
import {
    SafeAreaView,
    Text, TouchableOpacity,
    View,
    Image,
    StyleSheet
} from "react-native";
import thIcon from "../assets/img/language/thailand.png";
import cnIcon from "../assets/img/language/china.png";
import enIcon from "../assets/img/language/en.png";
import jpIcon from "../assets/img/language/japan.png";


const LangListSetting  = props => {
    const {activeLang, onChangeLang} = props;
    return (
        <SafeAreaView style={styles.languageSettingContainer}>
            <Title />
            <LangList activeLang={activeLang} onChangeLang={onChangeLang} />
        </SafeAreaView>
    )
};

export default LangListSetting;

const Title = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.titleInnerContainer}>
                <Text style={styles.titleText}>Select Language</Text>
            </View>
        </View>
    )
};

const LangList = ({activeLang, onChangeLang}) => {

    const pageList = [
        {
            lang: 'en',
            label: 'English'
        },
        {
            lang: 'zh',
            label: '中文'
        },
        {
            lang: 'ja',
            label: '日本'
        },
        {
            lang: 'th',
            label: 'ไทย'
        },
    ];
    return (
        <View style={styles.langListContainer}>
            {pageList.map((item, index) => {
                const handleClickItem = () => onChangeLang(item.lang);
                const isActiveLang = (activeLang === item.lang);
                return (
                    <LangIcon isActiveLang={isActiveLang} lang={item.lang} key={index} onPress={handleClickItem} />
                )
            })}
        </View>
    );
};

const LangIcon = ({lang, onPress, isActiveLang}) => {
    const iconsMap = {
        th: thIcon,
        zh: cnIcon,
        en: enIcon,
        ja: jpIcon
    };
    const icon = iconsMap[lang];
    return (
        <TouchableOpacity style={[styles.langIconContainer, isActiveLang && styles.langIconContainerActive]} onPress={onPress}>
            <Image style={styles.langIcon} source={icon} />
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    languageSettingContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        backgroundColor: 'rgba(114, 84, 0, 0.4)',
        paddingVertical: 15,
        width: '100%',
        marginTop: 20,
    },
    titleInnerContainer: {
        backgroundColor: '#725400',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    langListContainer: {
        marginVertical: '15%',
        alignItems: 'center'
    },
    langIconContainer: {
        marginVertical: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    langIconContainerActive: {
        borderWidth: 5,
        borderColor: '#ddd',
    },
    langIcon: {
        width: 100,
        height: 70,
    }
});