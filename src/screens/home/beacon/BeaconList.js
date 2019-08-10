import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon, Left, Body, View } from 'native-base';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingBeaconInfo } from "../../../reducers/actions/setting";

class BeaconList extends Component {
  render() {
    console.log("beaconInfo",this.props.beaconInfo)
    console.log("beaconInfo",this.props.beaconInfo.length)
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          {
            this.props.beaconInfo.length < 1 ? 
            <View style={styles.viewNoactive}>
              <Icon name='portable-wifi-off' type="MaterialIcons" style={{fontSize: 100}}/>
              <Text>ไม่พบสัญญาณ หรือ คุณอยู่นอกพื้นที่</Text> 
            </View>
            :this.props.beaconInfo.map((data,key)=> {

              console.log(data)
              return (
              <Card style={styles.card} key={key}>
                <CardItem>
                  <Left>
                    {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                    <Icon name='md-wifi' />
                    <Body>
                      <Text>{data.title}</Text>
                      {/* <Text note>April 15, 2016</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body style={styles.body }>
                    <Image source={{uri: data.imageTitle}} style={styles.image }/>
                    <Text 
                    // numberOfLines={2} 
                    // clip
                    >
                      {data.detail}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            )
          }
            )
          }
          
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  settingBeaconInfo,
}, dispatch)

const mapStateToProps = (state) => {
  return {
    language: state.setting.language,
    beaconInfo: state.setting.beaconInfo
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BeaconList)

// export default BeaconList


const styles = StyleSheet.create({
  container:{
    // paddingTop: 20,
    
  },
  content:{
    flex: 1,
  },
  card:{
    flex: 0,
  },
  body:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image :{
    height: 200, 
    width: 300, 
    flex: 1, 
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  viewNoactive : {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
})