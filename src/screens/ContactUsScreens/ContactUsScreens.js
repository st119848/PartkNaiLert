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
    container: {
        flex: 1,
        backgroundColor: 'rgb(242, 218, 217)'
    },
    contactContainer: {
        backgroundColor: 'white',
        width: '90%',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    timeContainer: {
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        width: '90%',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    titleContainer: {
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'rgb(125, 105 , 87)',
        marginRight: -15,
        marginTop: 15,
        paddingLeft: 10,
    },
    rightTitleContainer: {
        marginRight: 0,
        marginLeft: -15,
        paddingLeft: 25,
        backgroundColor: 'rgb(205, 94, 90)',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
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
        color: 'dimgrey',
    },
    facebookIcon: {
        color: 'rgb(125, 105 , 87)',
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
        padding: 15
    },
    timeDetail: {
        color: 'dimgrey'
    }

});