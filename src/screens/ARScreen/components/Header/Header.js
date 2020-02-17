import React from "react";
import {Container} from "./style"
import { Actions } from 'react-native-router-flux';
import BackButton from "../../../../components/header/BackButton";

var createReactClass = require("create-react-class");

var Header = createReactClass({
    handleBackClick() {
        const {onBack} = this.props;
        if(onBack) {
            onBack();
        } else {
            Actions.pop()
        }
    },
	render: function() {

        return (
            <Container>
                <BackButton onPress={this.handleBackClick} />
            </Container>
        )
	},
});

module.exports = Header;
