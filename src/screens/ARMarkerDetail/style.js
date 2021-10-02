import styled from 'styled-components/native';

export const Theme = styled.View`
	flex: 1;
	background-color: rgb(112,112,112);
	position: relative;
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
    font-size: 20px;
    font-family: PT Mono;
    line-height: 26px;
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
    resize-mode: cover;
`;

export const TextBox = styled.View`
    padding: 27px 13px 0 13px;
`;

export const TitleText = styled.Text`
    font-size: 22px;
    font-family: PT Mono;
    line-height: 19px;
    text-align: left;
    color: white;
    padding: 10px 0;
`;

export const DetailText = styled.Text`
    font-size: 14px;
    font-family: PT Mono;
    line-height: 16px;
    text-align: left;
    color: white;
    padding: 10px 0;
`;


