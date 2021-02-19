import styled from 'styled-components/native';
import { SliderBox } from "react-native-image-slider-box";

export const Container = styled.View`
    flex:1;
    background-color: #fff;
    align-items: center;
`;
export const Header = styled.View`
    height: 100px;
    width: 100%;
    flex-direction: row;
`;
export const Cart = styled.TouchableOpacity`
    width: 50px; 
    height: 50px; 
    position: absolute;
    right:10;
    top: 40;
    justify-content: center;
    align-items: center;
`;
export const Voltar = styled.TouchableOpacity`
    width: 50px; 
    height: 50px; 
    position: absolute;
    left:10;
    top: 40;
    justify-content: center;
    align-items: center;
`;

export const ContainerDesconto = styled.View`
    width: 80px; 
    height: 30px; 
    border-radius: 5px;
    background: #E47737; 
    top: 50px;
    left: 20px;
    position: absolute; 
    align-items: center;
    justify-content: center;
`;

export const TextoDesconto = styled.Text`
    color: #FFF; 
    font-size: 20px;
    font-weight: bold;
`;

export const Imagem = styled(SliderBox)`
    width: 100%;
    height: 200px;
`;

export const ContainerImage = styled.View`
    width:100%;
    height:30%;
`;
export const Title = styled.Text`
    font-size: 25px;
    margin:5px;
    margin-top:30px;
`;
export const ContainerDescricao = styled.ScrollView`
    height: 20%;
    width: 95%;
    border-width: 1;
    border-color: #BEC7D0;
    padding: 10px;

`;
export const TextoDescricao = styled.Text`
    font-size: 16px;
    text-align: left;
`;
export const ContainerValor = styled.View`
    height: 20%;
    width: 100%;
    padding:30px;
    margin-top: 10px;
`;
export const TitleValor = styled.Text`
    font-size:25px;
    margin-bottom: 10px;
`;
export const ContainerValores = styled.View`
    flex-direction: row;
`;
export const ValorInicial = styled.Text`
    width:50%;
    font-size: 18px;
`;
export const ValorFinal = styled.Text`
    width:50%;
    font-size: 18px;
    text-align: right;
`;
export const Total = styled.Text`
    font-size: 25px;
    margin-top: 20px;
`;
export const ContainerQuantidade = styled.View`
    flex-direction:row;
    width:100%;
    margin-top: 10%;
    margin-bottom: 10%;
    align-items: center;
    justify-content:center;
`;
export const ButtonSoma = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    align-items: center;
`;
export const Quantidade = styled.Text`
    font-size:30px;
    text-align: center;
    width:60%;
`;
export const ButtonSubtracao = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    align-items: center;
`; 
export const ButtonText = styled.Text`
    font-size: 40px;
`;