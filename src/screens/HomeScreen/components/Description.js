import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const Description = () => {
    return (
        <View style={styles.container}>
            <Title/>
            <DescriptionText/>
        </View>
    )
};

const Title = () => {
    return (
        <Text style={styles.title}>
            Augmented Reality
        </Text>
    )
};

const DescriptionText = () => {
    return (
        <Text style={styles.description}>
            Our Museum use the AR and Beacons technology to gain your experience. Please enjoy by clicking AR camera below
        </Text>
    )
};

export default Description;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    title: {
        color: 'rgb(125, 105 , 87)',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.5,
        marginBottom: 5,
        marginTop: 30,
    },
    description: {
        fontSize: 12,
        color: 'dimgrey'
    }
});