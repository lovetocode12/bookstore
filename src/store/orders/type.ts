import { Book } from "../books/type";

export const ADDTOCART_BOOK = 'ADDTOCART_BOOK'
export const BUYNOW_BOOK = 'BUYNOW_BOOK'
export const CHECKOUT_CART = 'CHECKOUT_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_ADDRESS = 'GET_ADDRESS'
export const SET_ADDRESS = 'SET_ADDRESS'

export interface Order {
    book: Book
    orderStatus: 'InProcess' | 'Delivered'
    orderDate: Date
}

export interface OrderState {
        pastOrders: Array<Order>,
        currentOrders: Array<Order>
        address: Address
}


export interface Address {
    address1: string;
    address2: string;
    email: string;
    phone: string;
    city: string;
}

export interface AddToCartBOOKAction {
    type: typeof ADDTOCART_BOOK;
    payload: Order;
}

export interface BuyNowBooksAction {
    type: typeof BUYNOW_BOOK;
    payload: Order
}

export interface ClearCartAction {
    type: typeof CLEAR_CART;
}

export interface CheckoutCartAction {
    type: typeof CHECKOUT_CART;
}

export interface SetAddressAction {
    type: typeof SET_ADDRESS;
    payload: Address
}

export interface GetAddressAction {
    type: typeof GET_ADDRESS;
}

export type OrdersActionTypes = AddToCartBOOKAction | BuyNowBooksAction 
| ClearCartAction | CheckoutCartAction | GetAddressAction | SetAddressAction;

