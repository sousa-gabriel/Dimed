import React from 'react';

import {
    ItemContainer,
    ContainerImage,
    ContainerDetalhesItem,
    NomeItem,
    ContainerValor,
} from './styles';

interface DadosItem {
  Selecionado: number;
  name: string;
  imagem: string;
  precoOriginal: number;
  precoAtual:number;
  quantidade: number;
}

const ItemCar: React.FC <DadosItem> = ({name, imagem, precoOriginal, precoAtual,quantidade, Selecionado, ...rest}) =>{  
    const TotalValorItem = (quantidade * (precoAtual == undefined ? precoOriginal : precoAtual)) 
  return(
    <ItemContainer >
{        console.log(quantidade)}
      <ContainerImage resizeMode="contain" source={{uri:imagem}}/>
      <ContainerDetalhesItem>
        <NomeItem>{quantidade}  {name}</NomeItem>
        <ContainerValor>
          <NomeItem>Total R$ {TotalValorItem}</NomeItem>
        </ContainerValor>
      </ContainerDetalhesItem>
    </ItemContainer>
    )
}

export default ItemCar;