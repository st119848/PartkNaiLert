import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

const HeaderTitle = props => {
    const {title} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

export default HeaderTitle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_bold',
        fontWeight: '600',
    }
});