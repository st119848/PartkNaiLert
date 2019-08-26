import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import Icon from "../../components/Icon";
import {translate} from "../../helpers/translates";

class ContactUsScreens extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
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
            <SafeAreaView style={styles.container}>
                <ContactInformation {...contactData} t={this.t} />
                <TimeInformation {...contactData} t={this.t}/>
            </SafeAreaView>
        )
    }
}

export default ContactUsScreens;

const ContactInformation = props => {
    const {t, address, email, facebook, instagram} = props;
    const title = t('contact.title.contactInfor');
    const phone = t('contact.labels.phone', ':phone', '+66(0)2 2530123');
    const emailTranslated = t('contact.labels.email', ':email', email);
    return (
        <View style={styles.contactContainer}>
            <Text style={styles.contactTitle}>{title}</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.contactDetail}>{address}</Text>
                <Text style={styles.contactDetail}>{phone}</Text>
                <Text style={styles.contactDetail}>{emailTranslated}</Text>
                <SocialDetail iconName="facebook-square" text={facebook} />
                <SocialDetail iconName="instagram" text={instagram} />
            </View>
        </View>
    )
};

const SocialDetail = props => {
    const {iconName, text} = props;
    return (
        <View style={styles.socialDetailContainer}>
            <Icon style={styles.facebookIcon} name={iconName} size={30}/>
            <Text style={styles.contactDetail}>{text}</Text>
        </View>
    )
}

const TimeInformation = props => {
    const {t, detail} = props
    const title = t('contact.title.serviceTime');
    return (
        <View style={styles.timeContainer}>
            <Text style={styles.timeTitle}>{title}</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.timeDetail}>{detail}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242, 218, 217)'
    },
    contactContainer: {
        padding: 20,
        backgroundColor: 'white',
        width: '90%',
        marginTop: 20,
    },
    timeContainer: {
        alignSelf: 'flex-end',
        padding: 20,
        backgroundColor: 'rgb(192, 157, 147)',
        width: '90%',
        marginTop: 20,
    },
    contactTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
    },
    detailContainer: {
        paddingLeft: 10,
    },
    socialDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactDetail: {
        color: 'dimgrey'
    },
    facebookIcon: {
        color: 'rgb(74, 90, 143)',
        marginRight: 5,
    },
    igIcon: {
        color: 'rgb(74, 90, 143)',
        marginRight: 5,
    },
    timeTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
    },
    timeDetail: {
    }

});