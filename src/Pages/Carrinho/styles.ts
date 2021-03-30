import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background:#fff;

    align-items:center;
`;

export const Header = styled.View`
    height: 60px;
    width: 100%;
    margin-bottom: 50px;
`;

export const ListaDeItens = styled.FlatList`
    margin-bottom:10%;
`;

export const ContainerTitulo = styled.View`
    width:90%;
    height: 60px;

    justify-content: center;
    align-items: flex-start;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #6A6A70;
`;

export const ValorTotal = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;
