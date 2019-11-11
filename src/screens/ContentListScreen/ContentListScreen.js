import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Text, ImageBackground
} from "react-native";
import ContentItem from "./components/ContentItem";
import {translate} from "../../helpers/translates";
import ContentListLoading from "./components/loading/ContentListLoading";
import LangSettingButton from "../../components/header/LangSettingButton";
import BG from "../../assets/img/bg_main.png";

class ContentListScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <LangSettingButton />,
            headerBackTitle: null,
            headerTintColor: 'white',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: 'rgba(70, 41, 0, 0.8)',
            },
            headerTitle: 'Highlight'
        };
    };

    handleARButtonClick = () => {
        const {showARModal} = this.props;
        showARModal();
    };

    handleItemShowMoreClick = async (id) => {
        const {navigation, setActiveHighlightItem} = this.props;
        await setActiveHighlightItem(id);
        navigation.navigate('Detail');
    };

    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    componentDidMount() {
        const {getHighlightListFromApi} = this.props;
        getHighlightListFromApi();
    }

    renderItem = ({item}) => {
        return (
            <ContentItem {...item} t={this.t} onSeeMoreClick={this.handleItemShowMoreClick} />
        )
    };

    render() {
        const {highlightList, isGettingHighlightList, isGettingHighlightListSuccess} = this.props;
        return (
            <ImageBackground source={BG} style={styles.outercontainer}>
                <SafeAreaView style={styles.container}>
                    {isGettingHighlightList && <ContentListLoading/>}
                    {isGettingHighlightListSuccess && <FlatList
                        style={styles.flatList}
                        data={highlightList}
                        renderItem={this.renderItem}
                        contentContainerStyle={styles.flatContent}
                    />}
                </SafeAreaView>
            </ImageBackground>

        )
    }
}

export default ContentListScreen;

const styles = StyleSheet.create({
    outercontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        // paddingTop: '5%'
    },
    flatList: {
        flex: 1,
        marginTop: 44,
        paddingHorizontal: 15
    },
    flatContent: {
        paddingBottom: 10,
    }
});