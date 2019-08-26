import React from 'react';
import {Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import BGImage from "../../../assets/img/room_bg.jpg";
import IconButton from "../../../components/IconButton";
import LangButton from "../../../components/LangButton";
import BannerButton from "../../../components/BannerButton";

const Banner = props => {
    const {t} = props;
    return (
        <ImageBackground source={BGImage} style={styles.BGImage}>
            <SafeAreaView style={styles.contentContainer}>
                <Header {...props} />
                <Title t={t} />
                <GroupButton {...props} />
                <Slope />
            </SafeAreaView>
        </ImageBackground>
    )
};

export default Banner;

const Header = props => {
    const {language, onSetPageClick, onSetLangClick} = props
    return (
        <View style={styles.headerContainer}>
            <HamburgerButton onPress={onSetPageClick}/>
            <LangButton lang={language} onPress={onSetLangClick} />
        </View>
    )
};

const HamburgerButton = props => {
    const {onPress} = props;
    return (
        <IconButton onPress={onPress} iconName="menu" type="entypo" style={styles.icon} />
    )
};

const Slope = () => {
    return (
        <View style={styles.slopeContainer}/>
    )
};

const Title = ({t}) => {
    const title = t('home.title.nailert');
    const subTitle = t('home.title.location');
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
    );
};

const GroupButton = props => {
    const {t, onIntroClick, onFindClick} = props;
    const introLabel = t('home.buttons.intro');
    const guidesLabel = t('home.buttons.guides');
    return (
        <View style={styles.groupButtonContainer}>
            <BannerButton iconName="info" text={introLabel} onPress={onIntroClick}/>
            <BannerButton iconName="location-arrow" type="fonta" text={guidesLabel} onPress={onFindClick}/>
        </View>
    )
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    BGImage: {
        width: '100%',
        height: 320,
        overflow: 'hidden',
        position: 'relative'
    },
    slopeContainer: {
        bottom: 0,
        width: '100%',
        height: 0,
        position: 'absolute',
        borderLeftWidth: Dimensions.get('window').width/2,
        borderRightWidth: Dimensions.get('window').width/2,
        borderColor: 'white',
        borderTopWidth: 40,
        borderTopColor: 'transparent'
    },
    headerContainer: {
        width: '100%',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        textShadowColor: "#000",
        textShadowRadius: 1,
        fontSize: 24,
        marginBottom: 5,
    },
    subTitleText: {
        color: 'white',
        textShadowColor: "#000",
        textShadowRadius: 1,
        fontSize: 20,

    },
    groupButtonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        paddingBottom: 50,
    },
    icon: {
        color: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    }
});