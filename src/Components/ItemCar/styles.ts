import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    margin-top:10px;
    border-width: 1;
    border-color: #BEC7D0;
    padding:5px;

    flex-direction:row;
`;

export const ContainerImage = styled.Image`
    width: 40%;
    height: 100%;
    
`;
export const ContainerDetalhesItem = styled.View`
    width: 60%;
    height: 100%;

    flex-direction:column;
`;
export const NomeItem = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px;
`;
export const ContainerValor = styled.View`
    width: 100%;
    height: 50%;
    
    align-items:flex-end;
    flex-direction:row;
`;
export const ValorInicial = styled.Text`
    font-size:16px;

`;
export const ValorFinal = styled.Text`
    font-size:16px;
    margin-left: 10px;
`;
