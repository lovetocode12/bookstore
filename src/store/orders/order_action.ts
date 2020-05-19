import {
    BUYNOW_BOOK, ADDTOCART_BOOK, Order, CHECKOUT_CART
    , CLEAR_CART, SET_ADDRESS, GET_ADDRESS, Address
} from "./type"


export function addToCartBook(order: Order) {
    return {
        type: ADDTOCART_BOOK,
        payload: order
    }
}
export function buyNowBook(order: Order) {
    return {
        type: BUYNOW_BOOK,
        payload: order
    }
}

export function checkOut() {
    return {
        type: CHECKOUT_CART
    }
}
export function clearCart() {
    return {
        type: CLEAR_CART
    }
}

export function setAddress(payload: Address) {
    return {
        type: SET_ADDRESS,
        payload
    }
}

export function getAddress() {
    return {
        type: GET_ADDRESS
    }
}
