import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView
} from 'react-native'
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";
import ImagesSlider from "./components/ImagesSlider";
import Detail from "./components/Detail";

class ContentDetailScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };
    render() {
        const {activeHighlightItem={}} = this.props;
        const {galleryImages=[]} = activeHighlightItem;
        return (
            <SafeAreaView style={styles.container}>
                <ImagesSlider images={galleryImages}/>
                <Detail {...activeHighlightItem}/>
            </SafeAreaView>
        )
    }
}

export default ContentDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});