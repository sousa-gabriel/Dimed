import { Reducer } from "redux";
import produce from "immer";
const INITIAL_STATE = {
    items:[],
    itemDetalhes:[],
    car:[],
    total:[],
    totalValor:[],
};

const Item : Reducer = (state = INITIAL_STATE, action) => {

    return produce(state, draft =>{
        switch(action.type){
            case 'REMOVE_ITEM_CARRINHO':{
                const Item = action.payload;
                    const productInCartIndex = draft.car.findIndex(item =>
                        item.Item.itemDetalhes.itemDetalhes.id === Item.itemDetalhes.itemDetalhes.id,
                    );
                    if(productInCartIndex >= 0){
                        if(draft.car[productInCartIndex].quantity){
                            draft.car[productInCartIndex].quantity --;
                        }else{
                            return draft;
                        }
                    }else{
                       return draft;
                    }
                break;
            }
            case 'TOTAL_ITEM_CARRINHO':{
                const Total = action.payload;
                    var soma=0;
                    for (let i=0; i < Total.itemDetalhes.length;i++){
                      soma += Total.itemDetalhes[i].quantity
                    }
                    draft.total=soma
                break;
            }
            default:{
                return draft;
            }
        }
    });
}
export default Item;

