export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}
export interface Cart {
  sneaker: Sneaker;
  size: number;
  quantity: number;
  paymentMethod?: any;
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
