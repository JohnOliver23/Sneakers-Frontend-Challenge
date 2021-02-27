export interface Action {
  payload: any;
  type: string;
  cart?: Cart;
  [key: string]: any;
}
export interface Cart {
  sneaker: Sneaker;
  size: number;
  quantity: number;
  paymentMethod: PaymentMethod;
  customer: Customer;
  totalCost: number;
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

export interface Customer {
  name: string;
  phone: string;
  address: Address;
}

export interface Address {
  street: string;
  number: number;
}

export enum PaymentMethod {
  ONLINE = 'Online Banking',
  CARD = 'Card Payment',
  APPLE = 'Apple Pay',
}
