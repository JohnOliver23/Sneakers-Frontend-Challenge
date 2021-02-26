export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}
export interface Cart {
  sneaker: Sneaker;
  size: number;
  quantity: number;
}
export interface Sneaker {
  color: string;
  currency: string;
  description: string;
  id: string;
  maxresURL: string;
  price: string;
  thumbnailURL: string;
}
