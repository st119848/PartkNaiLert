import React from 'react';
import {useSelector} from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import ContentListScreen from "../screens/ContentListScreen";
import ContentDetailScreen from "../screens/ContentDetailScreen";
import IntroductionScreen from "../screens/IntroductionScreen";
import FindUsScreen from "../screens/FindUsScreen";
import ContactUsScreens from "../screens/ContactUsScreens";
import PageSettingButton from "../components/header/PageSettingButton";
import LangSettingButton from "../components/header/LangSettingButton";
import HeaderBackground from "../components/header/HeaderBackground";
import {translate} from "../helpers/translates";
import HeaderTitle from "../components/header/HeaderTitle";
import ARZoneSelector from "../screens/ARZoneSelector";
import ARMarkerDetail from "../screens/ARMarkerDetail";

const MenuStack = createStackNavigator();

const MenuNavigator = () => {
    const language = useSelector(state => state.setting.language);
    const t = (key, find, replace) => translate(language, key, find, replace);
    const getDefaultOptions = ({ route }) => ({
        headerRight: () => <LangSettingButton routeName={route.name}/>,
        headerBackground: () => <HeaderBackground />,
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
        headerTransparent: true,
        headerBackTitleVisible: false
    });
    return (
        <MenuStack.Navigator>
            <MenuStack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => ({
                    ...getDefaultOptions({ navigation, route }),
                    headerTitle: null,
                    headerLeft: props => <PageSettingButton {...props} navigation={navigation}/>,
                })}
            />
            <MenuStack.Screen
                name="List"
                component={ContentListScreen}
                options={({ navigation, route }) => ({
                    ...getDefaultOptions({ navigation, route }),
                    headerTitle: () => <HeaderTitle title={t('menus.highLight')} />,
                })}
            />
            <MenuStack.Screen
                name="Detail"
                component={ContentDetailScreen}
                options={({ navigation, route }) => ({
                    ...getDefaultOptions({ navigation, route }),
                    headerTitle: () => <HeaderTitle title={t('menus.highLight')} />,
                })}
            />
            <MenuStack.Screen
                name="Intro"
                component={IntroductionScreen}
                options={({ navigation, route }) => ({
                    ...getDefaultOptions({ navigation, route }),
                    headerTitle: () => <HeaderTitle title={t('menus.intro')} />,
                })}
            />
            <MenuStack.Screen
                name="Find"
                component={FindUsScreen}
                options={({ navigation, route }) => ({
                    ...getDefaultOptions({ navigation, route }),
                    headerTitle: () => <HeaderTitle title={t('menus.findUs')} />,
                })}
            />
            <MenuStack.Screen
                name="Contact"
                component={ContactUsScreens}
                options={({ navigation, route }) => ({
                    ...getDefaultOptions({ navigation, route }),
                    headerTitle: () => <HeaderTitle title={t('menus.contactUs')} />,
                })}
            />
            <MenuStack.Screen
                name="ARZoneSelector"
                component={ARZoneSelector}
                options={{
                    headerTitle: null,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                }}
            />
            <MenuStack.Screen
                name="ARMarkerDetail"
                component={ARMarkerDetail}
                options={{
                    headerTitle: null,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                }}
            />
        </MenuStack.Navigator>
    )
};

export default MenuNavigator;

