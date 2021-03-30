//usando a função conbiner reducer para unir varios reduders em apenas um
import {combineReducers} from 'redux';
// import Item from './cart/reducer';
import handleActions from './cart/AddDateApi';

export default combineReducers({
    // Item,
    handleActions,
})
