import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

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
import { detalhesItem } from '../../store/models/cart/actions';
import { useDispatch } from 'react-redux';

interface DadosItem {
  Selecionado: number;
  name: string;
  imagem?: string;
  precoOriginal?: string;
  precoAtual?:string;
}

const Item: React.FC <DadosItem> = ({name, imagem, precoOriginal, precoAtual, Selecionado, ...rest}) =>{
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function Teste(ItemId:number) {   
    await
    (  
       api.get('Items/'+ ItemId).then(response=>{
      dispatch( detalhesItem(response.data))
      })
    ),
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
    )
}

export default Item;