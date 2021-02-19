import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { IItem, IItemDetalhes } from '../store/models/cart/types';
import {
  Container, 
  Header,
  Cart,
  Voltar,
  ContainerImage,
  Title,
  ContainerDescricao,
  TextoDescricao,
  ContainerValor,
  TitleValor,
  ContainerValores,
  ValorInicial,
  ValorFinal,
  Total,
  Imagem,
  ContainerQuantidade,
  ButtonSoma,
  Quantidade,
  ButtonText,
  ButtonSubtracao,
  TextoDesconto,
  ContainerDesconto,
} from './styles';

import CartIcon from '../Icons/Cart.png';
import VoltarIcon from '../Icons/Voltar.png';
import { addCarrinho, removeCarrinho, totalCarrinho } from '../store/models/cart/actions';

interface CatalogItemProps{
  itemDetalhes: IItem;
}

const DetalheItem: React.FC<CatalogItemProps> = ({itemDetalhes}) =>{
  const navigation = useNavigation();
  const dispatch = useDispatch();
  var quantidade = 0;
  var TotalValorItem = 0;

  //buscando da api
  const Detalhes = useSelector<IState,IItemDetalhes>(state => state.Item.itemDetalhes);

  const QuantidadeAdd = useSelector<IState,IItemDetalhes>(state => state.Item.car);

  const TotalItens = useSelector<IState,IItemDetalhes>(state => state.Item.total);

  //Total no Redux
    useEffect(()=>{
      dispatch( totalCarrinho(QuantidadeAdd)) 
    },[QuantidadeAdd])  
    
  //Soma no Redux
  const SomaValor = useCallback(()=>{
    dispatch( addCarrinho(Detalhes))
  },[dispatch,itemDetalhes]);

  //Subtrair no Redux
  const SubtraiValor = useCallback(()=>{
    dispatch( removeCarrinho(Detalhes)) 
  },[dispatch,itemDetalhes]);

  //função que rotorna itens add e total do item 
  const qtdaddproduct = QuantidadeAdd.length-1      
  if(qtdaddproduct >= 0){
    quantidade = QuantidadeAdd[qtdaddproduct].quantity
  }
  TotalValorItem = (quantidade * (Detalhes.itemDetalhes.price.dealPrice == undefined ? Detalhes.itemDetalhes.price.originalPrice : Detalhes.itemDetalhes.price.dealPrice)) 

  const imagens = Detalhes.itemDetalhes.images;

  return (
  <Container>
    <Header>
      <Voltar 
        onPress={()=>{navigation.navigate('Lista')}}  
      >
        <Image source={VoltarIcon} />
      </Voltar>
      <Cart 
        onPress={()=>{navigation.navigate('Carrinho')}}  
      >
        <View style={{backgroundColor:'#000',borderRadius:10,justifyContent:'center', alignItems: 'center',marginLeft:5, height:20, width:20}} >
          <Text style={{color:'#fff'}} >{TotalItens}</Text>
        </View>
        <Image source={CartIcon} />
      </Cart>
    </Header>
    <ContainerImage>
      <ContainerDesconto>
        <TextoDesconto>-{Detalhes.itemDetalhes.price.percentage}%</TextoDesconto>
      </ContainerDesconto>
    <Imagem
        images={imagens}
        sliderBoxHeight={100}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#00C0DC"
        resizeMode="contain"        
        inactiveDotColor="#707070"
    />
    </ContainerImage>
    <Title>{Detalhes.itemDetalhes.name}</Title>
    <ContainerDescricao>
      <TextoDescricao>
        {Detalhes.itemDetalhes.description}
      </TextoDescricao>
    </ContainerDescricao>
    <ContainerValor>
      <TitleValor>Price</TitleValor>
      <ContainerValores>
        <ValorInicial>De R${Detalhes.itemDetalhes.price.originalPrice}</ValorInicial>
        <ValorFinal>Por R${Detalhes.itemDetalhes.price.dealPrice == undefined ? Detalhes.itemDetalhes.price.originalPrice : Detalhes.itemDetalhes.price.dealPrice }</ValorFinal>   
      </ContainerValores>
    </ContainerValor>
    <Total>Total R$ {TotalValorItem}</Total>
    <ContainerQuantidade>
      <ButtonSoma>
        <ButtonText onPress={()=>{SomaValor()}}>
          +
        </ButtonText>
      </ButtonSoma>
      <Quantidade>{quantidade}</Quantidade>
      <ButtonSubtracao>
        <ButtonText onPress={()=>{SubtraiValor()}}>
          -
        </ButtonText>
      </ButtonSubtracao>
    </ContainerQuantidade>
  </Container> 
  )
}

export default DetalheItem;