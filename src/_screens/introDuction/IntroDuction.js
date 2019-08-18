import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Image, ImageBackground } from "react-native";
import { Container, Content, Body, Header, Left, Right, Text } from "native-base";

import introduction from '../../data/introduction';

const { width, height } = Dimensions.get('window')

class IntroDuction extends Component {

    constructor(props) {
        super(props)
        this.state = {
            introDuctionDetail: {}
        }
        this.SetIntroduction()
    }

    SetIntroduction = async () => {
        console.log("SetIntroduction")
        const res = await introduction.Thailand
        await this.setState({
            introDuctionDetail: { ...res[0] }
        })
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Body style={styles.body}>
                        <Image resizeMode='contain' source={{ uri: this.state.introDuctionDetail.image }} style={styles.image} /> 
                        <Text style={styles.text}>{this.state.introDuctionDetail.detail}</Text>
                        <View style={{ height: 50 }} />
                    </Body>
                </Content>
            </Container>
        )
    }
}

export default IntroDuction



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        padding: 20,
    },
    body: {
        padding: 10,
        alignItems: "center",
    },
    text: {
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200
    }
});

