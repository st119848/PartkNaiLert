import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    Text,
    ImageBackground,
} from 'react-native';
import Icon from "../../components/Icon";
import {translate} from "../../helpers/translates";
import LangSettingButton from "../../components/header/LangSettingButton";
import BG from "../../assets/img/bg_main.png";
import HeaderTitle from "../../components/header/HeaderTitle";

class ContactUsScreens extends Component {
    static navigationOptions = {
        headerRight: <LangSettingButton />,
        headerBackTitle: null,
        headerTintColor: 'white',
        headerTransparent: true,
        headerStyle: {
            backgroundColor: 'rgba(70, 41, 0, 0.8)',
        },
        headerTitle: <HeaderTitle title='Contact Us' />,
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    componentDidMount() {
        const {getAboutUsContactFromApi} = this.props;
        getAboutUsContactFromApi();
    }

    render() {
        const {contactData} = this.props;
        return (
            <ImageBackground source={BG} style={styles.outtercontainer}>
                <SafeAreaView style={styles.container}>
                    <ContactInformation {...contactData} t={this.t} />
                    <TimeInformation {...contactData} t={this.t}/>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

export default ContactUsScreens;

const ContactInformation = props => {
    const {t, address, email, facebook, instagram} = props;
    const title = t('contact.title.contactInfor');
    return (
        <View style={styles.contactContainer}>
            <Title title={title} />
            <View style={styles.detailContainer}>
                <ContactItem iconName="contacts" text={address} />
                <ContactItem iconName="phone" text='+66(0)2 2530123' />
                <ContactItem iconName="mail" text={email} />
                <ContactItem iconName="facebook-square" text={facebook} />
                <ContactItem last iconName="instagram" text={instagram} />
            </View>
        </View>
    )
};

const Title = props => {
    const {title, right} = props;
    return (
        <View style={[styles.titleContainer, right && styles.rightTitleContainer]}>
            <Text style={[styles.title, right && styles.rightTitle]}>{title}</Text>
        </View>
    )
};

const ContactItem = props => {
    const {iconName, text, last} = props;
    return (
        <View style={styles.contactItemContainer}>
            <Icon style={styles.facebookIcon} name={iconName} size={25}/>
            <View style={[styles.contactDetailContainer, last && styles.contactDetailContainerLast]}>
                <Text style={styles.contactDetail}>{text}</Text>
            </View>
        </View>
    )
};

const TimeInformation = props => {
    const {t, detail} = props
    const title = t('contact.title.serviceTime');
    return (
        <View style={styles.timeContainer}>
            <Title title={title} right />
            <View style={styles.timeDetailContainer}>
                <Text style={styles.timeDetail}>{detail}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    outtercontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    contactContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '90%',
        marginTop: Platform.OS === 'ios'? 64 : 74,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    timeContainer: {
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width: '90%',
        marginTop: 20,
    },
    titleContainer: {
        height: 45,
        justifyContent: 'center',
        backgroundColor: '#655327',
        marginTop: 10,
        marginRight: 10,
        paddingLeft: 10,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    rightTitleContainer: {
        marginRight: 0,
        marginLeft: 10,
        paddingLeft: 25,
        backgroundColor: '#655327',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
        fontFamily: 'PT Mono',
    },
    rightTitle: {
        color: 'white',
    },
    detailContainer: {
        paddingHorizontal: 15,
    },
    contactItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactDetailContainerLast: {
        borderBottomWidth: 0,
    },
    contactDetailContainer: {
        borderBottomWidth: 1,
        borderColor: 'lavender',
        flex: 1,
        height: 50,
        justifyContent: 'center'
    },
    contactDetail: {
        color: '#655327',
        fontFamily: 'PT Mono',
    },
    facebookIcon: {
        color: '#655327',
        marginRight: 10,
    },
    igIcon: {
        color: 'rgb(74, 90, 143)',
        marginRight: 5,
    },
    timeTitle: {
        color: 'rgb(205, 94, 90)',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    timeDetailContainer: {
        padding: 15,
    },
    timeDetail: {
        color: '#655327',
        fontFamily: 'PT Mono',
    }

});