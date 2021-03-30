import {IItem, IProduct} from './types';

// export function addDateApi(product: IProduct) {
//     return {
//         type: 'ADD_PRODUCT_TO_API',
//         payload: {
//             product,
//         }
//     }
// }

export function detalhesItem(itemDetalhes: IItem) {
    return {
        type: 'RETURN_DETALHES_ITEM',
        payload: {
            itemDetalhes,
        }
    }
}

export function addCarrinho(itemDetalhes: IItem) {
    return {
        type: 'ADD_ITEM_CARRINHO',
        payload: {
            itemDetalhes,
        }
    }
}

export function removeCarrinho(itemDetalhes: IItem) {
    return {
        type: 'REMOVE_ITEM_CARRINHO',
        payload: {
            itemDetalhes,
        }
    }
}

export function totalCarrinho(itemDetalhes: IItem) {
    return {
        type: 'TOTAL_ITEM_CARRINHO',
        payload: {
            itemDetalhes,
        }
    }
}


export function totalSaldo(itemDetalhes: IItem) {
    return {
        type: 'TOTAL_ITEM_CARRINHO',
        payload: {
            itemDetalhes,
        }
    }
}

