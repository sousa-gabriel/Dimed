import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ItemContainer,
  ContainerImage,
  ContainerDetalhesItem,
  NomeItem,
  ContainerValor,
  ValorInicial,
  ValorFinal,
} from './styles';
import api from '../../services/api';
import {itemDetail} from '../../store/models/cart/ItemDetalhes';
import {useDispatch} from 'react-redux';

interface DadosItem {
  Selecionado: number;
  name: string;
  imagem?: string;
  precoOriginal?: string;
  precoAtual?: string;
}

const Item: React.FC<DadosItem> = ({name, imagem, precoOriginal, precoAtual, Selecionado}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function Teste(ItemId:number) {
    await (api.get('Items/'+ ItemId).then(response => {
      const item = response.data;
      const quantity = 0;
      const dados = {item, quantity};
      dispatch(itemDetail(dados));
    }));
    navigation.navigate('Item');
  }

  return(
    <ItemContainer onPress={()=>{Teste(Selecionado)}}>
      <ContainerImage resizeMode="contain" source={{uri:imagem}}/>
      <ContainerDetalhesItem>
        <NomeItem>{name}</NomeItem>
        <ContainerValor>
          <ValorInicial>De R$ {precoOriginal}</ValorInicial>
          <ValorFinal>Por R$ {precoAtual}</ValorFinal>
        </ContainerValor>
      </ContainerDetalhesItem>
    </ItemContainer>
  );
};

export default Item;
