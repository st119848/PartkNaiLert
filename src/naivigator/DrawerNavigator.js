import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image , StyleSheet} from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation'
import {Icon} from 'native-base'

import HeadLanguage from '../components/headbar/HeadLanguage'
import HeadLeft from '../components/headbar/HeadLeft'

import HomeScreen from '../screens/home/HomeScreen'
import IntroDuction from '../screens/introDuction/IntroDuction'
import BeaconList from '../screens/home/beacon/BeaconList'
import FindUS from '../screens/findUS/FindUS'
import ContacSreen from '../screens/contacUS/ContacSreen'
import MuseumHighlight from '../screens/home/highlight/MuseumHighlight'
import OutScreen from '../screens/home/OutScreen'

const CustomDrawerComponet = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
          <View style={styles.viewHead}>
          <Text style={styles.textLogo}>NAI LERT PARK HERITAGE HOME</Text>
              {/* <Image resizeMode="contain" source={require("../assets/images/logo.png")} style={styles.image} /> */}
          </View>
          <DrawerItems {...props} />
            {console.log(props)}
          {/* <Text>{JSON.stringify(props)}</Text> */}

      </ScrollView>
  </SafeAreaView>
)

const AppHomeScreen = createStackNavigator({
  AppTabNavigator: {
      screen: HomeScreen,
    //   screen: OutScreen,
      navigationOptions: ({ navigation }) => ({
          title: 'Home',
          headerLeft: <HeadLeft navigation={navigation} />,

        //   headerTitle: <HeadLanguage />,
          headerRight: <HeadLanguage />,
      }),
    //  MuseumHighlight: {
    //     screen: MuseumHighlight,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Museum Highlight',
    //         // headerTitle: <HeadLanguage />,
    //     }),
    // },
  },
  MuseumHighlight: {
    screen: MuseumHighlight,
    navigationOptions: ({ navigation }) => ({
        title: 'Museum Highlight',
        // headerTitle: <HeadLanguage />,
    }),
},
// OpenCamera: {
//     screen: OpenCamera
// },
ShowDataBeacon: {
    screen: BeaconList
},
})

const FindUsStackNavigator = createStackNavigator({
    FindUsTabNavigator: {
        screen: FindUS,
        navigationOptions: ({ navigation }) => ({
            title: 'FindUS',
            headerLeft: <HeadLeft navigation={navigation} />,
        }),
    },
})
const IntroStackNavigator = createStackNavigator({
    IntroTabNavigator: {
        screen: IntroDuction,
        navigationOptions: ({ navigation }) => ({
            title: 'IntroDuction',
            headerLeft: <HeadLeft navigation={navigation} />,
        }),
    },
})
const ContacUsStackNavigator = createStackNavigator({
    ContacUsTabNavigator: {
        screen: ContacSreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Contac us',
            headerLeft: <HeadLeft navigation={navigation} />,
        }),
    },
})
const OutScreenMenu = createStackNavigator({
    Out: {
        screen: OutScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Contac us',
            headerLeft: <HeadLeft navigation={navigation} />,
        }),
    },
})
  
 
  const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: AppHomeScreen,
        navigationOptions:{
            drawerIcon: <Icon type="FontAwesome"  name="home"/>,
        }
    },
    // Home111: AppHomeScreen,
    // Home: AppStackNavigator,
    // Introduction: AppHomeScreen,
    Introduction: IntroStackNavigator,
    FindUS: FindUsStackNavigator,
    ContacUS: ContacUsStackNavigator,
    Out: OutScreenMenu,
    // slide: ImageCarousel,
    // logout: Logout,
}, {
    contentComponent: CustomDrawerComponet
    })
  



export default  createAppContainer(AppDrawerNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewHead: {
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    textLogo:{
        fontSize: 18,
        color: '#7D4900',
        textAlign: 'center',
    },
    image: {
        height: 50,
        width: 200,
    },
});