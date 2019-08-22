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

    handleItemShowMoreClick = (id) => {
        const {navigation} = this.props;
        navigation.navigate('Detail');
    }

    renderItem = ({item}) => {
        const {navigation} = this.props
        return (
            <ContentItem {...item} onSeeMoreClick={this.handleItemShowMoreClick} />
        )
    };

    render() {
        const mockItemData = [
            {
                key: '0',
                imageUrl: 'http://128.199.204.164:8000/public/images/149a61a1-757a-487b-864e-473cbf9cc29e.jpg',
                title: 'สะพานยก'
            },
            {
                key: '1',
                imageUrl: 'http://128.199.204.164:8000/public/images/0332f9f6.jpg',
                title: 'รถเมล์ขาว'
            },
            {
                key: '2',
                imageUrl: 'http://128.199.204.164:8000/public/images/63c3b437.jpg',
                title: 'ศาลเจ้าแม่ทับทิม'
            },
        ];
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={mockItemData}
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