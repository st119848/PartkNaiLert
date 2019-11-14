import React from 'react'
import {
    ActivityIndicator,
    Text,
    Image,
    View,
    ImageBackground,
    StyleSheet,
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import BeaconScan from '../../tools/BeaconScan'
import icon from './../assets/img/logo.png'

import { connect } from 'react-redux'
import { settingLanguage } from "../reducers/actions/setting";
import BG from "../assets/img/bg_main.png";

 class AuthLoadingScreen extends React.Component {
  constructor() {
    super()
    this._LoadApp()
  }
  _LoadApp = async () => {
      const selectedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if(selectedLanguage && (selectedLanguage !== null)) {
          this.props.settingLanguage(selectedLanguage)
          this.props.navigation.navigate('Main')
      } else {
          this.props.navigation.navigate('Init')
      }
  };

  render() {
    return (
        <ImageBackground source={BG} style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logoInnerContainer}>
                    <Image source={icon} style={styles.logo}/>
                    <Title />
                    <ActivityIndicator />
                </View>
            </View>
            <BeaconScan/>
        </ImageBackground>
    )
  }
}

const Title = props => {
     return (
         <Text style={styles.title}>PARK OF NAI LERT</Text>
     )
};


const mapDispatchToProps = (dispatch) => {
    return {
        settingLanguage: (lang) => dispatch(settingLanguage(lang))
    }
};

const mapStateToProps = (state) => {
  return {
    language: state.setting.language
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logoContainer: {
        backgroundColor: 'rgba(114, 84, 0, 0.4)',
        paddingVertical: 15,
        width: '100%',
    },
    logoInnerContainer: {
        backgroundColor: 'rgba(114, 84, 0, 0.9)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    logo: {
        resizeMode: 'contain',
        width: 120,
        height: 80,
    },
    title: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular',
    }
});

