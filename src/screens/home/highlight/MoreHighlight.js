import React, { Component } from 'react';
import { StyleSheet, Dimensions, Modal, Text, TouchableOpacity, View, Alert, Platform, Image } from 'react-native';
import { Icon, H3, Container, Content, Footer, Body} from "native-base";

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../../../reducers/actions/setting";
import {buttons, titles, alerts } from '../../../data/translates'

// import SlideImage from '../../../components/image/SlideImage';
const { width, height } = Dimensions.get('window')

class MoreHighlight extends Component {


  render() {
    const { visible, value } = this.props
    console.log("moreH", visible)
    console.log("Value : ", value.images)
    return (
      <Modal
        transparent={false}
        animationType="slide"
        visible={visible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          console.log("close modal")
        }}
      >
        <Container style={styles.container}>
          <Content style={styles.contentBody}>
          <Body>
            {value &&
              <View style={[styles.content]} >
                <View>
                  <View style={[styles.slideImage]} >
                    {/* <SlideImage images={value.images}/> */}
                    <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: "http://nailertparkheritagehome.com/cache/widgetkit/gallery/40/home10-9a920b78cb.jpg" }} />
                  </View>
                  <Text style={[styles.title]}>{value.title}</Text>
                  <Text>{value.detail}</Text>
                </View>
              </View>
            }
            </Body>
          </Content>
          <Footer style={styles.footer}> 
            <Body style={styles.FooterTab}>
            <TouchableOpacity onPress={() => this.props.colseModel(false)} style={styles.buttonCloes}>
            <Icon name="ios-close" style={styles.icon} />
             <Text>CLOSE</Text>
            </TouchableOpacity>
            </Body>
          </Footer>
        </Container>
      </Modal>
    );
  }
}

MoreHighlight.defaultProps = {
  visible: false,
};


const mapDispatchToProps = (dispatch) => bindActionCreators({
  settingLanguage,
}, dispatch)

const mapStateToProps = (state) => {
  // console.log('STATE ', state)
  return {
    language: state.setting.language
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoreHighlight)
// export default MoreHighlight 

const styles = StyleSheet.create({
    container: {
        // paddingTop: 50,
        // paddingTop: 25,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: "center",
        alignItems: "center",
    },
    contentBody: {
        // width: width - 20,
        height,
        paddingTop: 20,
        backgroundColor: "#FFF",
    },
    viewClose: {
        alignItems: "flex-end",
    },
    closeButton: {
        width: 60,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#7D4900",
        // borderRadius: 25
    },
    content: {
        marginTop: -30,
        paddingTop: 0,
        padding: 10,
    },
    footer:{
      height: 80,
      backgroundColor: '#fff',
    },
    FooterTab: {
      // backgroundColor: "#7D4900",
      justifyContent: 'center',
    },
    buttonCloes:{
      backgroundColor: '#BB2526',
      width: width - 20,
      // padding: 20,
      height: 65 ,
      borderRadius: Platform.OS === 'ios' ? 10 : 10,    
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideImage: {
        height: 200,
        marginBottom: 20,
        backgroundColor: "#7D4900",
    },
    title: {
        fontSize: 25,
        color: "#7D4900",
    },
    icon: {
        fontSize: 40,
    }
});
