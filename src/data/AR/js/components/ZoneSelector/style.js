import styled from 'styled-components/native';

export const Theme = styled.SafeAreaView`
	flex: 1;
	background-color: rgb(112,112,112);
`;

export const Container = styled.View`
	padding: 60px 28px 20px 28px;
    align-items: center;
`;

export const ThreeDBox = styled.View`
    border-top-width: 1px;
    border-top-color: white;
    border-bottom-width: 1px;
    border-bottom-color: white;
    margin: 38px 0 0 0;
    width: 100%;
`;

export const Touch = styled.TouchableOpacity``;

export const ThreeDText = styled.Text`
    font-size: 17px;
    font-family: PT Mono;
    line-height: 22px;
    text-align: center;
    padding: 20px 10px 16px 10px;
    color: white;
`;

export const ImageBox = styled.View`
    align-items: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

export const ImageStyle = styled.Image`
    height: 196px;
    width: 289px;
`;

export const TextBox = styled.View`
    padding: 27px 13px 0 13px;
`;

export const TitleText = styled.Text`
    font-size: 15px;
    font-family: PT Mono;
    line-height: 19px;
    text-align: left;
    color: white;
    margin-bottom: 25px;
`;

export const DetailText = styled.Text`
    font-size: 10px;
    font-family: PT Mono;
    line-height: 13px;
    text-align: left;
    color: white;
`;


