import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import Icon from "../../components/Icon";

const { width } = Dimensions.get('window')

class ContactUsScreens extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ContactInformation />
                <TimeInformation />
            </SafeAreaView>
        )
    }
}

export default ContactUsScreens;

const ContactInformation = props => {
    const address = "4 ซอยสมคิด ถนนเพลินจิต กรุงเทพมหานคร 10330";
    const phone = "โทรศัพท์ : +66(0)2 2530123";
    const email = "E-mail : info@nailertparkheritagehome.com";
    const facebook = "nailertparkheritagehome/?fref=ts";
    const ig = "nailertpark_heritagehome";
    return (
        <View style={styles.contactContainer}>
            <Text style={styles.contactTitle}>CONTACT INFORMATION</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.contactDetail}>{address}</Text>
                <Text style={styles.contactDetail}>{phone}</Text>
                <Text style={styles.contactDetail}>{email}</Text>
                <SocailDetail iconName="facebook-square" text={facebook} />
                <SocailDetail iconName="instagram" text={ig} />
            </View>
        </View>
    )
};

const SocailDetail = props => {
    const {iconName, text} = props;
    return (
        <View style={styles.socialDetailContainer}>
            <Icon style={styles.facebookIcon} name={iconName} size={30}/>
            <Text style={styles.contactDetail}>{text}</Text>
        </View>
    )
}

const TimeInformation = props => {
    const time = 'บ้านปาร์คนายเลิศเปิดให้ชมบ้านทุกวันพฤหัสบดีและวันศุกร์,เวลานำชมมี 3 รอบ เวลา 11.00 น.14.00 น. และ 16.00 น.';
    return (
        <View style={styles.timeContainer}>
            <Text style={styles.timeTitle}>ช่วงเวลาเปิดให้บริการ</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.timeDetail}>{time}</Text>
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