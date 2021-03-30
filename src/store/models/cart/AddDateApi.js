import {createAction, handleActions} from 'redux-actions';

/*---------------------types and Action creators---------------------*/
export const addDateApi1 = createAction('ADD_PRODUCT_TO_API');

/*---------------------Initial state---------------------------------*/
const INITIAL_STATE = {items: []};

/*---------------------Initial state---------------------------------*/
const reducer = handleActions({
  [addDateApi1]: (state, {payload}) => ({
    ...state,
    items: payload,
  }),
},
  INITIAL_STATE,
);
export default reducer;
