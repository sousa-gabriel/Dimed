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
`;

export const CampoDeBusca = styled.TextInput`
    width: 90%;
    height: 50px;
    border-width: 1px;
    border-color: #BEC7D0;
    margin-bottom: 40px;
`;

export const ListaDeItens = styled.FlatList`
    margin-bottom:10%;
`;