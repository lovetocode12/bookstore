import {
    BUYNOW_BOOK, ADDTOCART_BOOK, OrdersActionTypes,
    CHECKOUT_CART, CLEAR_CART, SET_ADDRESS
} from "./type";

export const initialOrderState = {
    pastOrders: [],
    currentOrders: [],
    address: {}
};

export function orderReducer(state = initialOrderState, action: OrdersActionTypes): any {
    switch (action.type) {
        case BUYNOW_BOOK:
            return { ...state, currentOrders: [...state.currentOrders, action.payload] };
        case ADDTOCART_BOOK:
            return { ...state, currentOrders: [...state.currentOrders, action.payload] };
        case CHECKOUT_CART:
            const newOrders = state.currentOrders.slice();
            return { ...state, currentOrders: [], pastOrders: [...state.pastOrders, ...newOrders] };
        case CLEAR_CART:
            return { ...state, currentOrders: [] }
        case SET_ADDRESS:
            return { ...state, address: { ...state.address, ...action.payload } }
        default:
            return state;
    }
}