import React from 'react'
import { ActivityIndicator, AsyncStorage, View } from 'react-native'
// import SplashScreen from 'react-native-splash-screen'
// import BeaconScan from '../../tools/BeaconScan'

import { bindActionCreators } from "redux";
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
    const isSelectLanguage = await AsyncStorage.getItem('selectLanguage')
    console.log("isSelectLanguage: ",isSelectLanguage)
    this.props.settingLanguage(isSelectLanguage)
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        {/*<BeaconScan/>*/}
      </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
  settingLanguage,
}, dispatch)

const mapStateToProps = (state) => {
  return {
    language: state.setting.language
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
// export default AuthLoadingScreen

