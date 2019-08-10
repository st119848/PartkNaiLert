import React from 'react'
import { StyleSheet, AsyncStorage, View, TouchableOpacity, Image, Modal, Text } from 'react-native'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { settingLanguage } from "../../reducers/actions/setting";

import languages from '../../data/languagesAll';

 class HeadLanguage extends React.Component {

    constructor(props) {
        super()
        this.state = {
            modalVisible: false,
            languageActive: "th",
            languageIsActive: {},
        };
    }
    componentWillMount() {
        this.Getlanguage()
    }
    componentDidUpdate(props1, state) {
        if (this.state.languageActive !== state.languageActive) {
            this.Getlanguage()
        }
    }

    Getlanguage = async () => {
        try {
            const language = await AsyncStorage.getItem('selectLanguage')
            console.log(language)
            this.props.settingLanguage(language)
            this.setState({
                languageActive: language
            })
            await this.CheckLanguage()
            return true
        }
        catch (exception) {
            console.log(exception)
            return false;
        }

    }

    CheckLanguage = () => {
        this.setState({
            languageIsActive: languages.find((language) => (
                language.key === this.state.languageActive
            ))
        })
    }

    SetModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    SetLanguage = async (language) => {
        try {
            this.props.settingLanguage(language)
            await AsyncStorage.setItem('selectLanguage', language)
            await this.setState({
                languageActive: language
            })
            await this.SetModalVisible(!this.state.modalVisible);
            return true
        }
        catch (exception) {
            console.log(exception)
            return false;
        }
    }

    render() {
        return (
            <TouchableOpacity >
                <View style={{ paddingHorizontal: 10 }}>

                    <TouchableOpacity
                        onPress={() => {
                            this.SetModalVisible(true);
                        }}>
                        <Image source={this.state.languageIsActive.image} style={styles.imageButton} />
                    </TouchableOpacity>

                    <Modal
                        transparent
                        animationType="none"
                        visible={this.state.modalVisible}
                        // onDismiss={()=>this.SetModalVisible(!this.state.modalVisible)}
                        onRequestClose={() => {
                            // Alert.alert('Modal has been closed.');
                            console.log("close modal")
                        }}
                    >
                        <TouchableOpacity style={styles.containerModal} onPress={() => this.SetModalVisible(!this.state.modalVisible)}>
                            <View style={styles.bodyModal}>
                                <View style={styles.triangle} />
                                <View style={styles.bodyModalLanguage}>
                                    {!languages ? null : languages.map((language, key) => (
                                        <TouchableOpacity
                                            key={key}
                                            onPress={() => {
                                                this.SetLanguage(language.key);
                                            }} >
                                            <View style={language.key === this.state.languageActive ? styles.contentModalActive : styles.contentModal}>
                                                <Image source={language.image} style={styles.images} />
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </TouchableOpacity>
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
  export default connect(mapStateToProps, mapDispatchToProps)(HeadLanguage)


const styles = StyleSheet.create({
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor: 'rgba(0, 255, 0, 1)',
        alignItems: 'flex-end',
        paddingTop: 60,
    },
    bodyModal: {
        alignItems: 'center',
    },
    bodyModalLanguage: {
        alignItems: 'flex-end',
    },
    contentModal: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        backgroundColor: 'white',
    },
    contentModalActive: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 110,
        backgroundColor: 'white',
        borderLeftColor: '#f9ca24',
        borderLeftWidth: 2,
    },
    triangle: {
        width: 15,
        height: 15,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        marginLeft: 20,
    },
    imageButton: {
        borderRadius: 15,
        width: 30,
        height: 30
    },
    images: {
        width: 35,
        height: 25,
        borderWidth: 0.5,
        borderColor: '#d2d2d2',
    }
});

