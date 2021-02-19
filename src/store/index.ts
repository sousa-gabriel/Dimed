//onde fica toda nossa parte de redux ( um user state compartilhado na nossa aplicaçao)
import { createStore } from 'redux'; //cria nosso historico
import { IItemState } from './models/cart/types';

//usando o rootreducer para combinar todos os reducer que eu criar
import rootReducer from './models/rootReducer';

//otimizando o typescript do nosso reducer
export interface IState{
    Item: IItemState;
}

const store = createStore(
    rootReducer,
    );

export default store;



