import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import SplashScreen from 'react-native-splash-screen'
// import BeaconScan from '../../tools/BeaconScan'

import { connect } from 'react-redux'
import { settingLanguage } from "../reducers/actions/setting";

 class AuthLoadingScreen extends React.Component {
  constructor() {
    super()
    this._LoadApp()
  }
  componentDidMount(){
    // SplashScreen.hide()
  }
  _LoadApp = async () => {
      const selectedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if(selectedLanguage && (selectedLanguage !== null)) {
          this.props.settingLanguage(selectedLanguage)
      }
      this.props.navigation.navigate('Main')
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        {/*<BeaconScan/>*/}
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

