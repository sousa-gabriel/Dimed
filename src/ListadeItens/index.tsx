import React, {useEffect, useState} from 'react';
import Item from '../Components/Item';
import api from '../services/api';
import { ICarItem } from '../store/models/cart/types';
import { useDispatch } from 'react-redux';
import { addDateApi } from '../store/models/cart/actions';
import { useSelector } from 'react-redux';
import { Container, CampoDeBusca, ListaDeItens,Header } from './styles';
import { IState } from '../store';


const ListaItem: React.FC= () =>{
  const [text, setText] = useState('');
  const [list, setList] = useState<ICarItem[]>([]);
  const dispatch = useDispatch();

  //insere dados da Api no Redux
  useEffect(()=>{
    api.get('items').then(response=>{
      dispatch( addDateApi(response.data.payload))
    })
  },[dispatch])

  //busco os dados do meu redux
  const card = useSelector<IState,ICarItem[]>(state => state.Item.items);

  function Busca(text:string){
    const filtrarLista = card.filter((item:any) => {
      const itemFilter = item.name || item.ean.toString() ? item.name.toUpperCase() || item.ean.toUpperCase() : ''.toUpperCase();
      
      const Ean =  item.ean.toString();
      const EanitemFilter = Ean ? Ean.toUpperCase() : ''.toUpperCase();
      
      const Codigo = item.id.toString();
      const CodigoFilter = Codigo ? Codigo.toUpperCase() : ''.toUpperCase(); 
      const newText = text.toUpperCase();
      return (
        itemFilter.indexOf(newText) > -1 ||
        EanitemFilter.indexOf(newText) > -1 ||
        CodigoFilter.indexOf(newText) > - 1 
      );
    });
    setList(filtrarLista)
    setText(text)
  }
  
  return (
  <Container>
      <Header>
      
      </Header>
    <CampoDeBusca
      placeholder={'Pesquisar...'}
      placeholderTextColor={'#707070'}
      onChangeText={(Item:string)=>Busca(Item)} 
      value={text}
    />
    <ListaDeItens 
      data={list == '' ? card : list}
      renderItem={({item }) => (
        <Item 
          key={item.id}
          Selecionado={item.id}
          name={item.name}
          imagem={item.images[0]}
          precoOriginal={item.price.originalPrice}
          precoAtual={item.price.dealPrice}
        />
      )}
    />
  </Container>
  )
}

export default ListaItem;