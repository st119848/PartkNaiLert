import React, {Component} from "react";
import {Container} from "./style"
import { Actions } from 'react-native-router-flux';
import BackButton from "../../../../components/header/BackButton";

class Header extends Component{
    handleBackClick() {
        const {onBack} = this.props;
        if(onBack) {
            onBack();
        } else {
            Actions.pop()
        }
    }
    render() {

        return (
            <Container>
                <BackButton onPress={this.handleBackClick} />
            </Container>
        )
    }
}

export default Header;
