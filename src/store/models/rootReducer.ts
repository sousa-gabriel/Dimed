//usando a função conbiner reducer para unir varios reduders em apenas um
import {combineReducers} from 'redux';
import addDateApi from './cart/AddDateApi';
import itemDetail from './cart/ItemDetalhes';
import addItemToCart from './cart/AddItemToCart';

export default combineReducers({
  itemDetail,
  addDateApi,
  addItemToCart,
});
