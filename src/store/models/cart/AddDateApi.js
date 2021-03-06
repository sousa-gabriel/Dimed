//Redux feito pra inserir os dados vindos da api
import {createAction, handleActions} from 'redux-actions';

/*---------------------types and Action creators---------------------*/
export const addDateApi = createAction('ADD_PRODUCT_TO_API');

/*---------------------Initial state---------------------------------*/
const INITIAL_STATE = {items: []};

/*---------------------Initial state---------------------------------*/
const reducer = handleActions(
  {
    [addDateApi]: (state, {payload}) => ({
      ...state,
      items: payload,
    }),
  },
  INITIAL_STATE,
);
export default reducer;
