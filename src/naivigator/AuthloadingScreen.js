import React from 'react'
import {
    ActivityIndicator,
    View,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import BeaconScan from '../../tools/BeaconScan'
import logo from './../assets/img/logo.png'
import logoName from './../assets/img/logoName.png'
import icon from './../assets/img/icon.png'

import { connect } from 'react-redux'
import { settingLanguage } from "../reducers/actions/setting";

 class AuthLoadingScreen extends React.Component {
  constructor() {
    super()
    this._LoadApp()
  }
  _LoadApp = async () => {
      const selectedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if(selectedLanguage && (selectedLanguage !== null)) {
          this.props.settingLanguage(selectedLanguage)
      }
      // this.props.navigation.navigate('Main')
  };

  render() {
    return (
      <View style={styles.container}>
          <Image source={icon} style={styles.logo}/>
          {/*<Image source={logoName} style={styles.logoName}/>*/}
          <ActivityIndicator />
          <BeaconScan/>
      </View>
    )
  }
}


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
// export default AuthLoadingScreen

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        resizeMode: 'contain',
        width: width/100*50,
        height: width/100*50,
    },
});

