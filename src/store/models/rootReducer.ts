//usando a função conbiner reducer para unir varios reduders em apenas um  
import { combineReducers } from 'redux';
import Item from './cart/reducer';

export default combineReducers({
    Item,
})