//interface do produto
export interface IProduct{
    ean: number;
    id: number;
    images?: [],
    name: string;
    price:{
        originalPrice?: number,
        dealPrice?: number,
        percentage?: number
    }
}
//criando uma interface de Item(produto e quantidade a comprar)
export interface ICarItem{
    product: IProduct;
}

//criando uma interface com todos os item que vão estar no nosso carrinho
export interface IItemState{
    items: ICarItem[];
}

//criando interface do Item selecionado
export interface IItem{
    id:  number,
    ean: number,
    name : string,
    ratingScore: number,
    description: string,
    images: [],
    price:{
        originalPrice: number,
        dealPrice: number,
        percentage: number
    }
}

//criando interface de item
export interface IItemDetalhes{
    itemDetalhes: IItem;
}

//criando interface do carrinho
export interface IItensCarrinho{
    ItemDetalhes: IItem;
    quantity: number;
}

//Interface do Carrinho
export interface ICar{
    Car:ICarItem[];
}


