import React, { Component } from 'react'
import { StyleSheet, Platform, Dimensions, Text, View, TouchableHighlight} from 'react-native'
import { 
    Container, 
    Header, 
    Content, 
    Body, 
    Footer, 
    FooterTab, 
    Icon,
    Button,
} from 'native-base';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../../reducers/actions/setting";
import {buttons, titles, alerts } from '../../data/translates'

import SlideImage from '../../components/images/SlideImage'
import IntroHighlight from './highlight/IntroHighlight'
import Beacons from './beacon/Beacons'

import slidehome from '../../data/slidehome'

const { width } = Dimensions.get('window')

export class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageSlide: [
                { id: "", image: "0" },
                { id: "", image: "0" },
            ],
        }
    }
    componentWillMount(){
        this.SetImageSlide()
        console.log("HomeScreen-redux", this.props.language)
    }

    SetImageSlide = async () => {
        const res = slidehome.Thailand
        await this.setState({
            imageSlide: res.map((data) => ({ id: data.id, image: data.imageTitle, title: data.title }))
        })
        if (res.lenght > 0) {
        }
    }
  render() {
    return (
      <Container>
          <Content>
            <Body>
            <View style={[styles.slideImage]} >
                <SlideImage images={this.state.imageSlide} />
            </View>
            <IntroHighlight navigation={this.props.navigation} />
            <Beacons navigation={this.props.navigation} />
            </Body>
          </Content>
          <Footer style={styles.footer}> 
            <Body style={styles.FooterTab}>
            <TouchableHighlight onPress={()=>{this.props.navigation.navigate("OpenCamera")}} style={styles.buttonAR}>
            <View style={styles.textView}>
              <View style={styles.viewLeft}>
                  <Text style={styles.textARButton}>TRY!</Text>
              </View>
              <View style={[styles.bgCam,styles.viewCenter]}>
                  <Text style={styles.textAR}>AR</Text>
              </View> 
              <View style={styles.viewRight}>
                  <Text style={styles.textARButton}>CAMERA!</Text>
              </View>
            </View>
            </TouchableHighlight>
            </Body>
          </Footer>
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
  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
// export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  content: {
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 20,
    flex: 1,
  },
  slideImage: {
    height: 230,
    marginBottom: 30,
    backgroundColor: "#7D4900",
    flex: 1,
    width: '100%'
  },
  footer:{
    height: 80,
    backgroundColor: 'transparent',
  },
  FooterTab: {
    // backgroundColor: "#7D4900",
    justifyContent: 'center',
  },
  textView:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
textARButton: {
  fontSize: 20,
  color: '#FFF',
  // fontWeight: 'bold'
},
textAR: {
  fontSize: 20,
  // fontWeight: 'bold',
  color: '#BB2526',

},
viewLeft:{
  alignItems: 'flex-end',
  width: 100,
  
},
viewCenter:{
  alignItems: "center",
  // width: '20%',
  
},
viewRight:{
  alignItems: 'flex-start',
  width: 100,
},
buttonAR:{
  backgroundColor: '#BB2526',
  width: width - 20,
  // padding: 20,
  height: 65 ,
  borderRadius: Platform.OS === 'ios' ? 10 : 10,    
  justifyContent: 'center',
  alignItems: 'center',
},
bgCam: {
    // backgroundColor: "#FFF",
    backgroundColor: '#FFFFFF80',
    width:  Platform.OS === 'ios' ? 60 : 55,
    height: Platform.OS === 'ios' ? 60 : 55,
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    borderRadius: Platform.OS === 'ios' ? 35 : 27,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#BB2526',
    justifyContent: 'center',
    alignItems: "center",
    

  },
  iconCam: {
    fontSize:  Platform.OS === 'ios' ? 50 : 40,
    color: "#7D4900",
  }
});
