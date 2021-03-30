import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
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

import CartIcon from '../../Icons/Cart.png';
import VoltarIcon from '../../Icons/Voltar.png';
import {IItem} from '../../store/models/cart/types';
import { addItemToCart } from '../../store/models/cart/AddItemToCart';
// import {addItemToCart} from '../../store/models/cart/AddItemToCart';

interface CatalogItemProps {
  itemDetalhes: IItem;
}

const DetalheItem: React.FC<CatalogItemProps> = ({itemDetalhes}) =>{
  const navigation = useNavigation();
  const dispatch = useDispatch();
  var quantidade = 0;
  var TotalValorItem = 0;
  var QuantidadeAdd = 0;
  var TotalItens =0;
  //buscando da api
  const Detalhes = useSelector(state => state.itemDetail);
  console.log(Detalhes);
  // const QuantidadeAdd = useSelector(state => state.Item.car);
  // const TotalItens = useSelector(state => state.Item.total);

  // Total no Redux
  // useEffect(() => {
  //   const Detalhes = useSelector(state => state.itemDetail);
  // }, [Detalhes]);

//  Soma no Redux
  const SomaValor = useCallback(() => {
    console.log('Soma');
    dispatch(addItemToCart(Detalhes));
  }, [Detalhes, dispatch]);

  // Subtrair no Redux
  const SubtraiValor = useCallback(() => {
    console.log('Subtração');
    // dispatch(removeCarrinho(Detalhes));
  }, [Detalhes, dispatch]);

  //função que rotorna itens add e total do item
  // const qtdaddproduct = QuantidadeAdd.length - 1;
  // if (qtdaddproduct >= 0) {
  // quantidade = QuantidadeAdd[qtdaddproduct].quantity;
  // }
  // TotalValorItem = (quantidade * (Detalhes.itemDetalhes.price.dealPrice == undefined ? Detalhes.itemDetalhes.price.originalPrice : Detalhes.itemDetalhes.price.dealPrice));

  const imagens = Detalhes.item.images;

  return (
    <Container>
      <Header>
        <Voltar
          onPress={() => {navigation.navigate('Lista')}}>
          <Image source={VoltarIcon} />
        </Voltar>
      <Cart
         onPress = {()=>{navigation.navigate('Carrinho')}}>
        <View style={{backgroundColor:'#000',borderRadius:10,justifyContent:'center', alignItems: 'center',marginLeft:5, height:20, width:20}}>
          <Text style={{color: '#fff'}}>{TotalItens}</Text>
        </View>
        <Image source={CartIcon} />
      </Cart>
    </Header>
    <ContainerImage>
      <ContainerDesconto>
        <TextoDesconto>-{Detalhes.item.price.percentage}%</TextoDesconto>
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
    <Title>{Detalhes.item.name}</Title>
    <ContainerDescricao>
      <TextoDescricao>
        {Detalhes.item.description}
      </TextoDescricao>
    </ContainerDescricao>
    <ContainerValor>
      <TitleValor>Price</TitleValor>
      <ContainerValores>
        <ValorInicial>De R${Detalhes.item.price.originalPrice}</ValorInicial>
        <ValorFinal>Por R${Detalhes.item.price.dealPrice == undefined ? Detalhes.item.price.originalPrice : Detalhes.item.price.dealPrice }</ValorFinal>
      </ContainerValores>
    </ContainerValor>
    <Total>Total R$ {TotalValorItem}</Total>
    <ContainerQuantidade>
    <ButtonSoma onPress = {()=>{SomaValor()}}>
      <ButtonText> + </ButtonText>
    </ButtonSoma>
      <Quantidade>{Detalhes.quantity}</Quantidade>
      <ButtonSubtracao onPress = {() => {SubtraiValor()}}>
      <ButtonText>
          -
        </ButtonText>
      </ButtonSubtracao>
    </ContainerQuantidade>
  </Container>
  )
}

export default DetalheItem;
