import { createStore } from 'redux';
import { IItemState } from './models/cart/types';

import rootReducer from './models/rootReducer';

export interface IState{
    Item: IItemState;
}

const store = createStore(
    rootReducer,
    );

export default store;



