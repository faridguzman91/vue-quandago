export interface ICartItem {
  id: number;
  name: string;
  price: number;
  count: number;
}

export interface IProductItem {
  id: number;
  name: string;
}

export interface IProductsState {
  items: IProductItem[];
  currentPageNum: number;
  limitPerPage: number;
  hasMore: boolean;
}
