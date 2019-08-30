import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const Description = ({t}) => {
    const title = t('home.title.augmentedReality');
    const description = t('home.description.arDesc');
    return (
        <View style={styles.container}>
            <Title title={title}/>
            <DescriptionText description={description}/>
        </View>
    )
};

const Title = ({title}) => {
    return (
        <Text style={styles.title}>
            {title}
        </Text>
    )
};

const DescriptionText = ({description}) => {
    return (
        <Text style={styles.description}>
            {description}
        </Text>
    )
};

export default Description;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 40,
        marginVertical: '5%',
    },
    title: {
        color: 'rgb(125, 105 , 87)',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.5,
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        color: 'dimgrey',
        maxWidth: 380
    }
});