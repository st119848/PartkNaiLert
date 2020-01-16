import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    padding: 10px 0 0 20px;
    background-color: transparent;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    padding: 10px;
    
`;

export const Row = styled.View`
    flex-direction: row;
   justify-content: space-between;
`;

export const BackArrow = styled.View`
    width: 18px;
    height: 18px;
    border-bottom-width: 3;
    border-left-width: 3;
    border-color: white;
    transform: rotate(45deg);
    padding: 9px;
`;

export const CloseArrow = styled.Image`
    width: 70px;
    height: 70px;
`;

export const Column = styled.View`
    justify-content: center;
    background-color: rgb(0, 0, 0);
`;

export const Touch = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
`;