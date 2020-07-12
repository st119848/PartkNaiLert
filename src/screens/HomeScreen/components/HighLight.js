import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    Platform,
} from 'react-native';
import HighLightLoading from "./loading/HightLightLoading";
import Icon from './../../../components/Icon'

const {width} = Dimensions.get('window');

const HighLight = props => {
    const {loading} = props;
    return (
        <View style={styles.container}>
            <Header {...props} />
            {loading && <HighLightLoading />}
            {!loading && <ItemsList {...props}/>}
            <Footer {...props} />
        </View>
    )
};

export default HighLight;

const Header = props => {
    const {t} = props;
    const title = t('home.title.museumHighlight');
    return (
        <View style={styles.headerContainer}>
            <Title title={title}/>
        </View>
    )
};

const Footer = props => {
    const {t, onMoreItemClick} = props;
    const moreLabel = t('home.buttons.more');
    return (
        <View style={styles.footerContainer}>
            <MoreButton label={moreLabel} onPress={onMoreItemClick} />
        </View>
    )
};

const Title = ({title}) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
};

const MoreButton = props => {
    const {label, onPress} = props;
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
            <Text style={styles.buttonLabel}>
                {label}
            </Text>
            <Icon name="right" style={styles.buttonIcon}/>
        </TouchableOpacity>
    )
};

const ItemsList = props => {
    const {imagesHighlight=[], onImagePress} = props;
    return (
        <ScrollView horizontal contentContainerStyle={{paddingRight: 20}} style={styles.itemListContainer}>
            {imagesHighlight.map((item, index) => item.path && (
                <ItemImage source={item.path} key={index} onPress={() => onImagePress(index)}/>
            ))}
        </ScrollView>
    )
};

const ItemImage = props => {
    const {source, onPress} = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemImageContainer}>
                <Image style={styles.itemImage} source={{uri: source}} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#FFF5C9',
        marginVertical: 5,
        overflow: 'hidden',
    },
    headerContainer: {
        width: '100%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: 5,
    },
    footerContainer: {
        width: '100%',
        alignItems: 'flex-end',
    },
    title: {
        color: '#645227',
        fontSize: 22,
        fontWeight: '400',
        letterSpacing: 0.5,
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_regular',
    },
    buttonContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#645227',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonLabel: {
        color: '#FFF5C9',
        fontSize: 18,
        fontFamily: Platform.OS === 'ios'? 'PT Mono' : 'ptmono_bold',
        fontWeight: '500',
    },
    buttonIcon: {
        color: '#FFF5C9',
        fontSize: 18,
        marginLeft: 5
    },
    itemListContainer: {
        width: '100%',
        paddingBottom: 10,
    },
    itemImageContainer: {
        width: (width-70)/3,
        height: ((width-70)/3)/4*3,
        marginRight: 10,
        backgroundColor: 'rgb(125, 105 , 87)',
        borderRadius: 2,
        overflow: 'hidden'
    },
    itemImage: {
        width: '100%',
        height: '100%',
    }
});