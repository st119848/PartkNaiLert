import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from "../../../components/Icon";

const ARButton = ({t, onPress}) => {
    const tryLabel = t('home.buttons.try');
    const cameraLabel = t('home.buttons.camera');
    return (
        <SafeAreaView style={styles.safeContainer}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <ARIcon/>
                    <Title tryLabel={tryLabel} cameraLabel={cameraLabel}/>
                    <QuestionIcon />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const ARIcon = ({}) => {
    return (
        <Icon name="CodeSandbox" style={styles.ARIcon} size={30} />
    );
};

const QuestionIcon = () => {
    return (
        <Icon name="questioncircleo" style={styles.questionIcon} size={25} />
    )
};

const Title = ({tryLabel, cameraLabel}) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={[styles.buttonLabel, styles.right]}>
                {tryLabel}
            </Text>
            <Text style={styles.buttonARLabel}>
                AR
            </Text>
            <Text style={styles.buttonLabel}>
                {cameraLabel}
            </Text>
        </View>
    );
};

export default ARButton;

const styles = StyleSheet.create({
    safeContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgb(195, 82, 76)'
    },
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    buttonLabel: {
        color: 'white',
        width: 60,
    },
    right: {
        textAlign: 'right',
    },
    buttonARLabel: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(195, 82, 76)',
        textAlign: 'center',
        marginHorizontal: 10,
        padding: 5,
        opacity: 0.8
    },
    ARIcon: {
        color: 'white'
    },
    questionIcon: {
        color: 'white'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});