import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Voltar } from '../DetalheItem/styles';
import { IState } from '../../store';
import { IItemDetalhes } from '../../store/models/cart/types';
import { Container, ListaDeItens,Header,ValorTotal,Title,ContainerTitulo } from './styles';
import { useNavigation } from '@react-navigation/native';
import VoltarIcon from '../../Icons/Voltar.png';
import ItemCar from '../../Components/ItemCar';


const Carrinho: React.FC= () =>{
  const navigation = useNavigation();

  //busco os dados do meu carrinho da redux
  const ItensAdicionados = useSelector<IState,IItemDetalhes>(state => state.Item.car);

  //Somatorio do Total dos dados
  var total = 0
  ItensAdicionados.map(item=>{
    const TotalItem = (item.quantity * (item.Item.itemDetalhes.itemDetalhes.price.dealPrice == undefined ? 
      item.Item.itemDetalhes.itemDetalhes.price.originalPrice : 
      item.Item.itemDetalhes.itemDetalhes.price.dealPrice))
      total = TotalItem + total;
  })  
  
  return (
  <Container>
      <Header>
        <Voltar 
          onPress={()=>{navigation.navigate('Item')}}  
        >
          <Image source={VoltarIcon} />
        </Voltar>
      </Header>
      <ContainerTitulo>
          <Title>Itens Adicionados ao Carrinho</Title>
          <ValorTotal>Total das compras: {total}</ValorTotal>
      </ContainerTitulo>
    <ListaDeItens 
      data={ItensAdicionados}
      renderItem={({item }) => (
        <ItemCar 
          key={item.Item.itemDetalhes.itemDetalhes.id}
          Selecionado={item.Item.itemDetalhes.itemDetalhes.id}
          name={item.Item.itemDetalhes.itemDetalhes.name}
          imagem={item.Item.itemDetalhes.itemDetalhes.images[0]}
          precoOriginal={item.Item.itemDetalhes.itemDetalhes.price.originalPrice}
          precoAtual={item.Item.itemDetalhes.itemDetalhes.price.dealPrice}
          quantidade={item.quantity}
        />
      )}
    />
  </Container>
  )
}

export default Carrinho;