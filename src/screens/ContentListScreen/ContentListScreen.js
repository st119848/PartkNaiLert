import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Text
} from "react-native";
import ContentItem from "./components/ContentItem";
import ARButton from "./components/ARButton";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import HeaderLogo from "../../components/HeaderLogo";

class ContentListScreen extends Component {

    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };

    handleItemShowMoreClick = async (id) => {
        const {navigation, setActiveHighlightItem} = this.props;
        await setActiveHighlightItem(id);
        navigation.navigate('Detail');
    };

    componentDidMount() {
        const {getHighlightItemFromApi} = this.props;
        getHighlightItemFromApi();
    }

    renderItem = ({item}) => {
        return (
            <ContentItem {...item} onSeeMoreClick={this.handleItemShowMoreClick} />
        )
    };

    render() {
        const {highlightList} = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={highlightList}
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.flatContent}
                />
                <ARButton/>
            </View>
        )
    }
}

export default ContentListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1
    },
    flatContent: {
        paddingBottom: 10,
    }
});