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
        const detailData = {
            title: 'แจกันทรงสูง 2 ใบ',
            gallery: [
                'http://128.199.204.164:8000/public/images/149a61a1-757a-487b-864e-473cbf9cc29e.jpg',
                'http://128.199.204.164:8000/public/images/0332f9f6.jpg',
                'http://128.199.204.164:8000/public/images/63c3b437.jpg'
            ],
            description: 'แจกันกระเบื้องเคลือบทรงสูง ศิลปะแบบจีนสมัยราชวงศ์ชิง ตัวแจกันเพ้นท์ลายมังกรห้าเล็บ จํานวน 9 ตัวแสดงถึงอํานาจของจักรพรรดิ'
        };
        return (
            <SafeAreaView style={styles.container}>
                <ImagesSlider images={detailData.gallery}/>
                <Detail {...detailData}/>
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