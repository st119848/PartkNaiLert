import React, { Component } from 'react';
import {  StyleSheet, Dimensions, Platform, Image } from "react-native";
import { Container, Header, Title, Content, H3, Button, Left, Right, Body, Icon, Text, View } from 'native-base';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../../../reducers/actions/setting";
import {buttons, titles, alerts } from '../../../data/translates'

// import { Fetch } from "../../../functionTool/Fetch";
import MoreHighlight from './MoreHighlight';
import allHighlight from '../../../data/allHighlight';


const { width } = Dimensions.get('window')

class MuseumHighliht extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            valueHighliht: {},
            allHighlight: [],
        }
        this.SetHighlight()
    }

    SetHighlight = async () => {
        const res = await allHighlight.Thailand
        console.log('SetHighlight : ', res)
        await this.setState({
            allHighlight: [...res],
        })
    }
    // SetHighlight = async () => {
    //     const res = await Fetch("/allhighlight")
    //     console.log('SetHighlight : ', res)
    //     await this.setState({
    //         allHighlight: [...res.result],
    //     })
    // }

    SetModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    SetValueHighliht = async (value) => {
        await this.setState({
            valueHighliht: { ...this.state.allHighlight[value] }
        })
        await this.SetModalVisible(true)
    }
    OpenMore = () => {
        if (this.state.valueHighliht) {
            return <MoreHighlight visible={this.state.modalVisible} colseModel={this.SetModalVisible} value={this.state.valueHighliht} />
        }
    }
    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    {/* <Body> */}
                    {
                        this.state.allHighlight.length > 0 && this.state.allHighlight.map((article, key) => (
                            // <Body key={article.id + key}>
                                <View key={article.id + key}>
                                    <View style={styles.viewImage} >
                                        <Image style={styles.image} resizeMode="cover" source={{ uri: article.imageTitle }} />
                                        {/* <Image resizeMode="contain" source={{ uri: article.image }} style={styles.listItemImage} /> */}
                                    </View>
                                    <View style={styles.contentDetail}>
                                        <View style={styles.header}>
                                            <View style={styles.left}>
                                                <Title style={styles.textTitle} numberOfLines={2} >{article.title}</Title>
                                            </View>
                                            <View style={styles.right}>
                                                <Button bordered style={styles.button} onPress={() => this.SetValueHighliht(key)} >
                                                    <Text style={styles.textButton} numberOfLines={1} clip>{buttons[this.props.language].readMore}</Text>
                                                </Button>
                                            </View>
                                        </View>

                                        <View style={styles.viewTextDetail}>
                                            <Text numberOfLines={2} style={styles.textDetail}>
                                                {article.detail}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            // </Body>
                        ))
                         
                    }
                    {/* </Body> */}
                </Content>
                {this.OpenMore()}
            </Container>
        );
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
  export default connect(mapStateToProps, mapDispatchToProps)(MuseumHighliht)
// export default MuseumHighliht

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    content: {
        padding: 20,
        paddingTop: 0,
    },
    header: {
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
    },
    left: {
        // float: "left",
        width: "65%",
        paddingLeft: Platform.OS === 'ios'  ? 0 : 3,

    },
    right: {
        width: "35%",
        // justifyContent: "flex-end",
        right: 0
    },


    contentDetail: {
        marginBottom: 20,
        paddingBottom: 20,
    },

    viewImage: {
        width: width,
        // height: 200,
        paddingTop: 0,
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingBottom: 10,
    },
    image: {
        width: width - 20,
        height: 180,
    },
    // button: {
    //     borderColor: '#7D4900',
    // },
    button: {
        borderColor: '#7D4900',
        // width: 120,
        borderRadius: Platform.OS === 'ios' ? 5 : 8,
        padding: 10,
        justifyContent: "center",
    },
    textTitle: {
        color: '#7D4900',
        fontSize: 22,
        textAlign: "left",
    },
    textButton: {
        color: '#7D4900',
        textAlign: "center",
        fontSize: 12,
    },
    textDetail: {
        color: '#2d3436',
    },
    viewTextDetail: {
        width: "85%",
    },
});
