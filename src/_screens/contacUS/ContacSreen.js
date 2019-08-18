import React, { Component } from "react";
import { 
    StyleSheet, 
    Dimensions, 
    View, 
    Image, 
    ImageBackground, 
    Linking 
} from "react-native";

import { 
    Container, 
    Content, 
    Body, 
    Button, 
    Header, 
    Text, 
    H1, 
    H3,
    Icon 
} from "native-base";

// import Icon from 'react-native-vector-icons/FontAwesome';
import contac from '../../data/contac';

const { width, height } = Dimensions.get('window')

class ContacSreen extends Component {
    static navigationOptiuns = {
        drawerIcon: (<Icon type="FontAwesome" name="envelope"  size={20} />)
    }

    constructor(props) {
        super(props)
        this.state = {
            contacDetail: {}
        }
        this.SetContac()
    }

    SetContac = async () => {
        console.log("SetContac")
        const res = await contac.Thailand
        await this.setState({
            contacDetail: { ...res[0] }
        }, () => console.log("contac", this.state.contacDetail))
    }



    GoToContac = (url, urlApp) => {
        try {
            Linking.canOpenURL(urlApp).then(supported => {
                console.log(supported)
                if (supported) {
                    Linking.openURL(urlApp)
                    console.log("1")
                } else {
                    console.log("2")
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err));

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <Container>
                {/* <Header style={styles.header}>
                    <Body>
                        <Text>Contac US</Text>
                    </Body>
                </Header> */}
                <ImageBackground
                   resizeMode='repeat'
                    source={require('../../assets/img/bg.jpg')}
                    style={styles.bg}
                >
                    <Content style={styles.content}>
                        <Body style={styles.body}>
                            <View>
                                <View style={styles.boxContac}>
                                    <H1 style={[styles.text, styles.fontHaeder]}>{this.state.contacDetail.title}</H1>
                                    <H3 style={[styles.text, styles.fontAddress]}>{this.state.contacDetail.address}</H3>
                                    <Text style={styles.text}>{this.state.contacDetail.detail}</Text>
                                    {/* <Text style={[styles.text]}>เวลา 11.00 น. 14.00 น. และ 16.00 น.</Text> */}
                                </View>
                                <View style={styles.boxContacUS}>
                                    <Button style={styles.button} onPress={() => { Linking.openURL(`mailto://${this.state.contacDetail.email}`) }}>
                                        <Icon type="FontAwesome" name="envelope" size={35} color="#FFFF" />
                                    </Button>
                                    <Button style={styles.button} onPress={() => { this.GoToContac(`https://www.facebook.com/${this.state.contacDetail.facebook}`, `fb://profile?id=${this.state.contacDetail.facebook}`) }} >
                                        {/* <Button style={styles.button} onPress={() => { Linking.openURL('https://www.facebook.com/nailertparkheritagehome') }}> */}
                                        <Icon type="FontAwesome" name="facebook-f" size={35} color="#FFFF" />
                                    </Button>
                                    <Button style={styles.button} onPress={() => { this.GoToContac(`https://www.instagram.com/${this.state.contacDetail.instagram}`, `instagram://user?username=${this.state.contacDetail.instagram}`) }}>
                                        <Icon type="FontAwesome" name="instagram" size={35} color="#FFFF" />
                                    </Button>
                                </View>
                            </View>
                        </Body>
                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}

export default ContacSreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        // paddingTop: 20,
    },
    header: {
        backgroundColor: '#FFFFFF',
        height: 70,
        borderBottomColor: '#7D4900'
    },
    boxContac: {
        width: width - 30,
        minHeight: 200,
        padding: 30,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderColor: "#7D4900",
        borderStyle: 'solid',
        borderRadius: 3,
        borderWidth: 1,
    },
    boxContacUS: {
        width: width - 30,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-around',

    },
    body: {
        padding: 10,
        alignItems: "center",
    },
    text: {
        marginTop: 20,
        textAlign: 'center'
    },
    fontHaeder: {
        // fontSize: 25,
        fontWeight: 'bold',
        // color: "#7D4900",
    },
    fontAddress: {
        // fontSize: 20,
        color: "#7D4900",
        // fontWeight: 'bold',
    },
    bg: {
        // flex: 1,
        width,
        height
    },
    button: {
        backgroundColor: '#7D4900',
        borderRadius: 50,
        width: 70,
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
    },

});
