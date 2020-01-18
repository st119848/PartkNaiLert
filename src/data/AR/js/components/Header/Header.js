import React from "react";
import {Container} from "./style"
import { Actions } from 'react-native-router-flux';
import BackButton from "../../../../../components/header/BackButton";

var createReactClass = require("create-react-class");

var Header = createReactClass({
	render: function() {
        return (
            <Container>
                <BackButton onPress={() => Actions.pop()} />
            </Container>
        )
	},
});

module.exports = Header;
