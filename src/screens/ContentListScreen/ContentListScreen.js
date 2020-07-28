import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    ImageBackground,
    Platform
} from "react-native";
import ContentItem from "./components/ContentItem";
import {translate} from "../../helpers/translates";
import ContentListLoading from "./components/loading/ContentListLoading";
import LangSettingButton from "../../components/header/LangSettingButton";
import HeaderTitle from "../../components/header/HeaderTitle";
import BG from "../../assets/img/bg_main.png";
import { getStatusBarHeight } from 'react-native-status-bar-height';

class ContentListScreen extends Component {

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

        console.log('test', getStatusBarHeight());
    }

    renderItem = ({item}) => {
        return (
            <ContentItem {...item} t={this.t} onSeeMoreClick={this.handleItemShowMoreClick} />
        )
    };

    render() {
        const {highlightList, isGettingHighlightListSuccess} = this.props;
        return (
            <ImageBackground source={BG} style={styles.container}>
                    {!isGettingHighlightListSuccess && <ContentListLoading/>}
                    {isGettingHighlightListSuccess && <FlatList
                        style={styles.flatList}
                        data={highlightList}
                        renderItem={this.renderItem}
                        contentContainerStyle={styles.flatContent}
                    />}
            </ImageBackground>

        )
    }
}

export default ContentListScreen;

const marginTop = Platform.OS === 'ios'? getStatusBarHeight() + 44: 54;

const styles = StyleSheet.create({
    outtercontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    flatList: {
        flex: 1,
    },
    flatContent: {
        paddingHorizontal: 15,
        alignItems: 'center',
        paddingVertical: marginTop,
    }
});