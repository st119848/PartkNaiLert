import React, {Component} from "react";
import {
    Theme,
    ImageBox,
    ImageStyle,
    TextBox,
    TitleText,
    DetailText,
    Container,
    ThreeDBox,
    Touch,
    ThreeDText
} from "./style";
import { ScrollView } from 'react-native';
import {getMarkersHasModel} from "../../helpers/ar";
import {translate} from "../../helpers/translates";

class ARMarkerDetail extends Component {
    t = (key, find, replace) => {
        const {language} = this.props;
        return translate(language, key, find, replace);
    };

    handle3DClick = () => {
        const {activeZoneScreen, setActive3DMarker, activeMarker, navigation} = this.props;
        setActive3DMarker(activeMarker);
        activeZoneScreen && navigation.navigate('ARScanner', { screen: activeZoneScreen });
    }

    render() {
        const {activeMarker, activeZone, activeMarkerDetail={}} = this.props;
        const {title, detail, preview} = activeMarkerDetail;
        const has3D = getMarkersHasModel(activeZone); // Number of picture that has 3D
        const isShowModel = has3D.includes(activeMarker); // the marker from PNLAR  has in list of has3D if it exists it return id otherwise return undefined
        const threeDTitle = this.t('ar.detail.threeDAvailable');
        return (
            <Theme>
                <Container>
                    <ImageBox>
                        <ImageStyle source={preview} />
                    </ImageBox>
                    {isShowModel ? // check if  type of item3D not undefined so it has 3D  the bottom lines will show
                        <ThreeDBox>
                            <Touch onPress={() => this.handle3DClick()}>
                                <ThreeDText>{threeDTitle} ></ThreeDText>
                            </Touch>
                        </ThreeDBox>
                        : null}{/* if undefined it does not show the button */}
                    <ScrollView>
                        <TextBox>
                            <TitleText>{title}</TitleText>
                            <DetailText>
                                {detail}
                            </DetailText>
                        </TextBox>
                    </ScrollView>
                </Container>
            </Theme>
        );
    }
}

export default ARMarkerDetail;