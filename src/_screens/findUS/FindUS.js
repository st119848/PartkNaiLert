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
import openMap from 'react-native-open-maps'

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../../reducers/actions/setting";
import {buttons, titles, alerts } from '../../data/translates'


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



    _goToParkNailert() {
            openMap({ latitude: 13.7470623, longitude: 100.5473364, zoom: 18, query: "บ้านปาร์คนายเลิศ" })
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
                                 <Image resizeMode='contain' source={{ uri: this.state.contacDetail.image }} style={styles.image} />
                                </View>
                                <View style={styles.boxContacUS}>
                                    <Text style={[styles.textHeader, styles.textColor]}>{this.state.contacDetail.address}</Text>
                                    <Button iconLeft bordered style={styles.button} onPress={this._goToParkNailert}>
                                        <Icon type="FontAwesome" name='map-marker' size={30} color="#7D4900" />
                                        <Text style={styles.textColor}>{buttons[this.props.language].direction}</Text>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
    settingLanguage,
  }, dispatch)

  const mapStateToProps = (state) => {
    // console.log('STATE ', state)
    return {
      language: state.setting.language
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ContacSreen)

// export default ContacSreen

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
        marginTop: 20,
        // padding: 30,
        // backgroundColor: '#FFFFFF',
        // borderColor: "#7D4900",
        // borderStyle: 'solid',
        // borderRadius: 3,
        // borderWidth: 1,
    },
    boxContacUS: {
        width: width - 30,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
    body: {
        padding: 10,
        alignItems: "center",
    },
    text: {
        marginTop: 20,
        textAlign: 'center',
    },
    textColor: {
        color: "#7D4900",
    },
    textHeader: {
        fontWeight: 'bold',
        width: '60%',
        fontSize: 18
    },
    bg: {
        width,
        height
    },
    image: {
        width: null,
        height: 250,
        borderRadius:10,
    },
    button: {
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: "#7D4900",
        backgroundColor: '#FFFF',
    }

});
