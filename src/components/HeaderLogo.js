import React from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import logo from '../assets/img/logoName.png';

const HeaderLogo = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo}/>
        </View>
    )
};

export default HeaderLogo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 180,
        height: 30,
    }
});