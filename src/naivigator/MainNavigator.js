import React from 'react';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import ContentListScreen from "../screens/ContentListScreen";
import ContentDetailScreen from "../screens/ContentDetailScreen";
import IntroductionScreen from "../screens/IntroductionScreen";
import ParkNaiLertScreen from "../screens/ParkNaiLertScreen";
import FindUsScreen from "../screens/FindUsScreen";
import ContactUsScreens from "../screens/ContactUsScreens";

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    List: ContentListScreen,
    Detail: ContentDetailScreen,
    Intro: IntroductionScreen,
    PNL: ParkNaiLertScreen,
    Find: FindUsScreen,
    Contact: ContactUsScreens
});

export default MainNavigator;
