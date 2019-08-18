import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import logo from '../assets/img/logoName.png';

const HeaderLogo = props => {
    return (
        <Image style={styles.image} source={logo}/>
    )
};

export default HeaderLogo;

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 30,
    }
});