import React from 'react'
import {
    SafeAreaView,
    Text, TouchableOpacity,
    View,
    Image,
    StyleSheet,
    Platform
} from "react-native";
import thIcon from "../assets/img/language/thailand.png";
import cnIcon from "../assets/img/language/china.png";
import enIcon from "../assets/img/language/en.png";
import jpIcon from "../assets/img/language/japan.png";
import {connect} from "react-redux";
import {translate} from "../helpers/translates";


const LangListSetting  = props => {
    const {activeLang, onChangeLang} = props;
    const t = (key, find, replace) => {
        const {language} = props;
        return translate(language, key, find, replace);
    };
    return (
        <SafeAreaView style={styles.languageSettingContainer}>
            <Title t={t} />
            <LangList activeLang={activeLang} onChangeLang={onChangeLang} />
        </SafeAreaView>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const mapStateToProps = (state) => {
    return {
        language: state.setting.language,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LangListSetting)

const Title = ({t}) => {
    const title = t('home.language.select');
    return (
        <View style={styles.titleContainer}>
            <View style={styles.titleInnerContainer}>
                <Text style={styles.titleText}>{title}</Text>
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
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular',
    },
    langListContainer: {
        marginVertical: '15%',
        alignItems: 'center'
    },
    langIconContainer: {
        marginVertical: 10,
        overflow: 'hidden',
        borderRadius: 10,
        opacity: 0.8
    },
    langIconContainerActive: {
        borderWidth: 5,
        borderColor: '#ddd',
        opacity: 1
    },
    langIcon: {
        width: 100,
        height: 70,
    }
});