import React from "react";
import {Container, Touch, BackArrow} from "./style"
import { Actions } from 'react-native-router-flux';

var createReactClass = require("create-react-class");

var Header = createReactClass({
	render: function() {
        return (
            <Container>
                <Touch onPress={() => Actions.pop()}>
                    <BackArrow/>
                </Touch>
            </Container>
        )
	},
});

module.exports = Header;
