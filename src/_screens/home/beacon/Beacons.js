import React, { Component } from 'react'
import { StyleSheet, Dimensions,Platform, View, TouchableOpacity } from "react-native"
import { Content, Header, Text, Card, H3, CardItem, Left, Right, Icon, Body } from "native-base"
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../../../reducers/actions/setting";
import {buttons, titles, alerts } from '../../../data/translates'

const { width } = Dimensions.get('window')

class Beacons extends Component {
    onClickBeaconActive = () => {
        console.log("Navigator :",this.props.navigation)
        this.props.navigation.navigate("ShowDataBeacon")
    }
    showBeacon = () => {
     if (this.props.beaconActive) {
         return (
            <TouchableOpacity onPress={this.onClickBeaconActive}>
            <Card>
                <CardItem style={styles.cradItem}>
                    <Left>
                        <Icon name='md-wifi' style={styles.titleIcon} />
                        <H3 style={styles.text}>Beacons</H3>
                    </Left>
                    <Right>
                        <Icon name='md-checkmark-circle-outline' style={this.props.beaconActive ? styles.acctiveIcon : styles.noActiveIcon} />
                    </Right>
                </CardItem>
            </Card>
            </TouchableOpacity>
         )
     } else {
        return (
            <Card>
                <CardItem style={styles.cradItem}>
                    <Left>
                        <Icon name='md-wifi' style={styles.titleIcon} />
                        <H3 style={styles.text}>Beacons</H3>
                    </Left>
                    <Right>
                        <Icon name='md-checkmark-circle-outline' style={this.props.beaconActive ? styles.acctiveIcon : styles.noActiveIcon} />
                    </Right>
                </CardItem>
            </Card>
         )
     }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <H3 style={styles.textTitle}>{titles[this.props.language].augmentedReality}</H3>
                </View>
                <Content style={styles.content}>
                <View style={styles.viewTextRead}>
                    <Text style={styles.textRead}>
                        {alerts[this.props.language].explainAR}
                    </Text>
                </View>
                    {this.showBeacon()}
                    {/* <TouchableOpacity onPress={this.onClickBeaconActive}>
                    <Card>
                        <CardItem style={styles.cradItem}>
                            <Left>
                                <Icon name='md-wifi' style={styles.titleIcon} />
                                <H3 style={styles.text}>Beacons</H3>
                            </Left>
                            <Right>
                                <Icon name='md-checkmark-circle-outline' style={this.props.beaconActive ? styles.acctiveIcon : styles.noActiveIcon} />
                            </Right>
                        </CardItem>
                    </Card>
                    </TouchableOpacity> */}
                </Content>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    settingLanguage,
  }, dispatch)

  const mapStateToProps = (state) => {
    // console.log('STATE ', state)
    return {
      language: state.setting.language,
      beaconActive: state.setting.beaconActive,
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Beacons)

// export default Beacons

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 20,
        paddingTop: Platform.OS === 'ios' ? 0 : 0,
        // backgroundColor: '#fff',
    },
    content: {
        // paddingTop: 0,
        
    },
    header: {
        paddingTop:20,
        paddingBottom:20,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTextRead:{
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        color: '#7D4900',
    },
    textRead:{
    },
    textTitle: {
        color: '#7D4900',
        // textAlign: 'center'
    },
    titleIcon: {
        color: '#7D4900',
        fontSize: 50,
        marginRight: 10,
    },
    acctiveIcon: {
        color: '#2ecc71',
        fontSize: 40,
    },
    noActiveIcon: {
        fontSize: 40,
    },
    cradItem: {
        height: 90,
    },
    img: {
        width: 120, 
        height: 100,
    }
});



