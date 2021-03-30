//Redux feito pra adicionar um item no carrinho
import {createAction, handleActions} from 'redux-actions';
/*---------------------types and Action creators---------------------*/
export const addItemToCart = createAction('ADD_ITEM_CARRINHO');

/*---------------------Initial state---------------------------------*/
const INITIAL_STATE = {
  item: {},
  quantity: 0,
};

/*---------------------Initial state---------------------------------*/
const reducer = handleActions(
  {
    [addItemToCart]: (state, {payload}) => ({
      ...state,
      item: payload.item,
      quantity: payload.quantity + 1,
    }),
  },
  INITIAL_STATE,
);
export default reducer;
