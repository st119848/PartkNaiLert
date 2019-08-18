import React, {Component} from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native'
import HeaderLogo from "../../components/HeaderLogo";
import BeaconStatusIcon from "../../components/BeaconStatusIcon";

class IntroductionScreen extends Component {
    static navigationOptions = {
        headerTitle: <HeaderLogo />,
        headerRight: <BeaconStatusIcon />,
        headerBackTitle: null,
        headerTintColor: 'rgb(125, 105 , 87)'
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <Indicator />
                    <Content />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const Indicator = props => {
    return (
        <View style={styles.indicator}/>
    )
};

const Content = props => {
    const image = 'http://128.199.204.164:8000/public/images/6aec99df.png';
    const description = 'นายเลิศ หรือ พระยาภักดีนรเศรษฐ (เลิศ เศรษฐบุตร) เกิดเมื่อวันที่ 22 มิถุนายน พุทธศักราช 2415 ท่านเป็นผู้ที่มีใจรักในการริเริ่มสร้างสรรค์โดยแท้ สมกับชื่อบิดาของท่านตั้งให้ว่า ‘เลิศ สะมันเตา’ ซึ่งหมายถึงว่า ‘ดีเลิศเหนือสิ่งที่อยู่โดยรอบ หรือดีเหนือใคร ดีไม่เหมือนใคร‘ ชื่อนี้ได้กลายเป็นคำแสลงยอดนิยมในยุคเก่าก่อนไปโดยปริยาย โดยนายเลิศในวัยหนุ่มนั้น เป็นทั้งผู้ประกอบการ นักธุรกิจ นักพัฒนา นักลงทุน และผู้มีใจบุญสุนทาน นอกจากนี้ ตลอดชีวิตของท่านยังทุ่มเทเพื่อรักษาวัฒนธรรมและขนบธรรมเนียมตามแบบฉบับของสยามประเทศไว้เป็นอย่างดี แม้กระทั่งพระบาทสมเด็จพระมงกุฎเกล้าเจ้าอยู่หัว (รัชกาลที่ 6) ยังทรงชื่นชมนายเลิศในความมุ่งมั่นตั้งใจ และทรงพระราชทานบรรดาศักดิ์เป็น ‘พระยาภักดีนรเศรษฐ’ ในฐานะที่เป็น ‘เศรษฐีผู้เป็นที่รักของทุกคน’ ในพุทธศักราชปี 2468 นายเลิศยังเป็นนักธุรกิจแถวหน้าที่สร้างปรากฏการณ์ ‘ครั้งแรก’ ให้กับประเทศไทย อย่างธุรกิจโรงงานน้ำแข็งแห่งแรก, ตึกพาณิชย์ที่สูงที่สุดในปี พุทธศักราช 2470, ธุรกิจนำเข้ายานยนตร์จากยุโรปและอเมริกา, บริการรถเมล์ขนส่งตามเมืองหลัก ก่อนที่ท่านจะถึงแก่อนิจกรรมเมื่อวันที่ 15 ธันวาคม พุทธศักราช 2488 โดยมีภรรยาผู้เป็นที่รัก คุณหญิงสิน ภักดีนรเศรษฐ (เตวิทย์) และบุตรสาวของท่าน คือ ท่านผู้หญิงเลอศักดิ์ สมบัติศิริ รับช่วงดูแลกิจการสืบไป แม้นายเลิศจะจากไป แต่หลักในการทำงานของท่านยังคงฝังรากลึกจากรุ่นสู่รุ่น นั้นคือ พรหมวิหาร 4 (เมตตา กรุณา มุทิตา อุเบกขา) ซึ่งยังคงเป็นองค์ประกอบความสำเร็จที่อยู่เบื้องหลังธุรกิจของนายเลิศทั้งในอดีต ปัจจุบัน และอนาคต'
    return (
        <View style={styles.contentContainer}>
            <CoverImage image={image} />
            <Description description={description} />
        </View>
    )
}

const CoverImage = props => {
    const {image} = props;
    return (
        <View style={styles.imageContainer}>
            <Image resizeMode="contain" source={{uri: image}} style={styles.image}/>
        </View>
    )
};

const Description = props => {
    const {description} = props;
    return (
        <Text style={styles.description}>{description}</Text>
    )
};

export default IntroductionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242, 218, 217)'
    },
    scrollContainer: {
        flex: 1,
    },
    indicator: {
        flex: 1,
        height: 10,
        backgroundColor: 'rgb(125, 105 , 87)',
        marginHorizontal: 20,
        marginTop: 20,
    },
    contentContainer: {
        padding: 10,
        paddingTop: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        minHeight: '100%',
        borderRadius: 2,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: 280,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: 'dimgrey',
    }
});