import React from "react";
import {Container, Row, Column, Touch, BackArrow, CloseArrow} from "./style"
import { Actions } from 'react-native-router-flux';

var createReactClass = require("create-react-class");

var Header = createReactClass({
	render: function() {
        return (
            <Container>
                <Row>
                    <Column>
                        { this.props.renderBackArrow === true && 
                            <Touch onPress={() => Actions.pop()}>
                                <BackArrow/>
                            </Touch>
                        }
                    </Column>
                    <Column>
                        <Touch onPress={()=>{Actions.scan()}}>
                            <CloseArrow source={this.props.source}/>
                        </Touch>
                    </Column>
                </Row>
            </Container>
        )
	},
});

module.exports = Header;
