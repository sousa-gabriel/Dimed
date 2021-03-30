//Redux feito pra buscar o detalhe do Item
import {createAction, handleActions} from 'redux-actions';

/*---------------------types and Action creators---------------------*/
export const itemDetail = createAction('RETURN_DETALHES_ITEM');

/*---------------------Initial state---------------------------------*/
const INITIAL_STATE = {item: {}, quantity: 0};

/*---------------------Initial state---------------------------------*/
const reducer = handleActions(
  {
    [itemDetail]: (state, {payload}) => ({
      ...state,
      item: payload.item,
      quantity: payload.quantity,
    }),
  },
  INITIAL_STATE,
);
export default reducer;
