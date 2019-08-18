import React from "react";
import { StyleSheet, Dimensions, Platform, View, Image, AsyncStorage } from "react-native";
import { 
  Container, 
  Content, 
  Text, 
  Header, 
  Body, 
  Footer, 
  FooterTab,
  Button,
  List,
  ListItem,
  CheckBox,
  Left,
  Right

} from 'native-base'
const { width } = Dimensions.get('window')

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../reducers/actions/setting";

import languagesAll from '../data/languagesAll'
import { buttons,titles } from "../data/translates";

class SetLanguageScreen extends React.Component {
  state = {
    itemSelect: "en",
  }
  
  OnchangeLanguage = (item) => () => {
    console.log(item)
    this.setState({
      itemSelect: item
    })
  }

  SelectLanguage = async (language) => {
    console.log(language)
    this.props.settingLanguage(language)
    await AsyncStorage.setItem('selectLanguage', language)
    this.props.navigation.navigate('AuthLoading')
  }


    render() {
      // console.log("en",info[this.props.language].SelectLanuages)
      // console.log(this.props)
      return (
        <Container>
          <Header style={styles.header}>
          <Body>
          <View style={styles.viewLogo}>
            <Text style={[styles.textColor,styles.textAlignCenter]}>Welcome to</Text>
            <View>
            <Image resizeMode="stretch" source={require('../assets/img/logoName.png')} style={styles.logo} />
            </View>
          </View>
          </Body>
          </Header>
          <Content style={styles.content}>
            <Body style={styles.contentBody}> 
            {/* <Text style={styles.textTitle}>Select Language</Text> */}
            <Text style={styles.textTitle}>{titles["en"].selectLanuages}</Text>
            <List style={styles.list}>
              {languagesAll.map((language, index) => {
                return (
                  <ListItem key={language.name + index} onPress={this.OnchangeLanguage(language.key)} style={styles.listItem}>
                    <Left>
                      <Image resizeMode='stretch' source={ language.image } style={styles.listItemImage} />
                      <Text>{language.name}</Text>
                    </Left>
                    <Right>
                      <CheckBox checked={this.state.itemSelect === language.key} />
                    </Right>
                  </ListItem>
                )
              })}
            </List>

            </Body>
          </Content>
          <Footer>
          <FooterTab>
            <Button full style={styles.button} onPress={() => this.SelectLanguage(this.state.itemSelect)}>
              <Text style={styles.textButton}>{buttons["en"].startExperience}</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(SetLanguageScreen)

// export default SetLanguageScreen



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        paddingTop: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      contentBody: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
      height: 120,
      backgroundColor: '#FFFFFF',
      borderBottomColor: '#FFFFFF',

    },
    list: {
        width: width,
        // height: 100,
    },
    listItem: {
        marginLeft: 20,
        marginRight: 20
    },
    listItemImage: {
        width: 45,
        height: 30,
        borderWidth: 0.5,
        borderColor: '#d2d2d2',
        marginRight: 10,
    },
    textColor: {
        color: '#7D4900'
    },
    textAlignCenter:{
      textAlign: 'center'
    },
    textTitle:{
      fontSize: 24,
      color: '#4c5265',
      // fontWeight: 'bold',
    },
    viewLogo:{
        paddingTop: Platform.OS === 'ios' ? 0 : 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    logo: {
        width: width-20,
        // marginRight:20
        padding: 10,
        height: 80,
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 18,
        padding:10,

    },
    button: {
        backgroundColor: '#BB2526',

    }
});

