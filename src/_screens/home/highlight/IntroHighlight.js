import React, { Component } from 'react'
import { StyleSheet, Dimensions, Platform, View, Image, Text, TouchableOpacity } from "react-native"
import { Button, H3, Header } from "native-base";
// import { Fetch } from "../../../functionTool/Fetch";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../../../reducers/actions/setting";
import {buttons, titles, alerts } from '../../../data/translates'

const { width } = Dimensions.get('window')

import MoreHighlight from './MoreHighlight';
import allHighlight from '../../../data/allHighlight';

class IntroHighlight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            allHighlight: [],
            introImage: [],
            introMore: { id: "", title: "", detail: "", images: [{ image: "" }, { image: "" }] },
        }
        this.SetHighlight()
        this.navigation = props.navigation
    }



    SetHighlight = async () => {
        const result = await allHighlight.Thailand
        console.log('SetHighlight : ', result)
        await this.setState({
            allHighlight: [...result],
            introImage: [result[0], result[1], result[2]]
        }, () => console.log(this.state.introImage))
    }
    // SetHighlight = async () => {
    //     const res = await Fetch("/allhighlight")
    //     console.log('SetHighlight : ', res)
    //     await this.setState({
    //         allHighlight: [...res.result],
    //         introImage: [res.result[0], res.result[1], res.result[2]]
    //     }, () => console.log(this.state.introImage))
    // }

    SetModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    OpenMore = () => {
        if (this.state.modalVisible) {
            return (<MoreHighlight visible={this.state.modalVisible} colseModel={this.SetModalVisible} value={this.state.introMore} />)
        }
    }

    ReadMore = async (key) => {
        await this.setState({
            introMore: { ...this.state.introImage[key] }
        })
        await this.SetModalVisible(true)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                        <View style={styles.left}>
                            <H3 style={styles.textTitle}>{titles[this.props.language].museumHighlight}</H3>
                        </View >
                        <View style={styles.right}>
                            <Button bordered style={styles.button} onPress={() => this.navigation.navigate("MuseumHighlight")}>
                                <Text style={styles.textButton}>{buttons[this.props.language].more}</Text>
                            </Button>
                        </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.view1}>
                        {this.state.introImage.length > 0 && this.state.introImage.map((intro, key) => (
                            <TouchableOpacity onPress={() => this.ReadMore(key)} key={key}>
                                <Image style={styles.img} source={{ uri: intro.imageTitle }} />
                            </TouchableOpacity>
                        ))
                        }
                        {this.OpenMore()}
                    </View>
                </View>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    settingLanguage,
  }, dispatch)

  const mapStateToProps = (state) => {
    // console.log('STATE ', state)
    return {
      language: state.setting.language
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(IntroHighlight)
// export default IntroHighlight


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: width - 20,
    },
    content: {
        paddingTop: 10,
    },
    header: {
        // height: 90,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: '#FFFFFF',
        // borderBottomColor: '#FFFFFF',
    },
    left: {
        // float: "left",
        // width: "65%",
    },
    right: {
        // float: "right",
        // width: "35%",
        // justifyContent: "flex-end",
        // right: 0,
        // justifyContent: "center"
    },
    view1: {
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    img: {
        flex: 1,
        backgroundColor: '#7D4900',
        width: 100,
        height: 80,
        margin: 5
    },
    button: {
        borderColor: '#7D4900',
        width: 120,
        borderRadius: Platform.OS === 'ios' ? 5 : 8,
        padding: 10,
        justifyContent: "center"
    },
    textTitle: {
        color: '#7D4900',
    },
    textButton: {
        color: '#7D4900'
    },
});


