
export function addCarrinho(itemDetalhes) {
    return {
        type: 'ADD_ITEM_CARRINHO',
        payload: {
            itemDetalhes,
        }
    }
}

export function removeCarrinho(itemDetalhes) {
    return {
        type: 'REMOVE_ITEM_CARRINHO',
        payload: {
            itemDetalhes,
        }
    }
}

export function totalCarrinho(itemDetalhes) {
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

